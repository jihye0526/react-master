import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, toDoState } from "../atoms";

const ToDoText = styled.span`
    margin-right:10px;
`;

const ToDoButton = styled.button`
    background-color: #6AA7FD;
    color: white;
`;

const DoingButton = styled.button`
    background-color: #5F73E3;
    color: white;
`;

const DoneButton = styled.button`
    background-color: #8575FA;
    color: white;
`;

function ToDo({id, text, category}:IToDo){
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (cat:IToDo["category"]) => {
        setToDos((oldToDos) => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text, id, category:cat};
            return [...oldToDos.slice(0,targetIdx), newToDo, ...oldToDos.slice(targetIdx+1)];
        });
    }

    const onClick2 = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget : {name}} = e;
        setToDos((oldToDos) => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text, id, category:name as any};
            return [...oldToDos.slice(0,targetIdx), newToDo, ...oldToDos.slice(targetIdx+1)];
        });
    }

    return (
        <li>
            <ToDoText>{text}</ToDoText>
            {category !== "DOING" && <DoingButton name="DOING" onClick={onClick2}>Doing</DoingButton>}
            {category !== "TO_DO" && <ToDoButton onClick={() => onClick("TO_DO")}>To Do</ToDoButton>}
            {category !== "DONE" && <DoneButton onClick={() => onClick("DONE")}>Done</DoneButton>}
        </li>);
}

export default ToDo;