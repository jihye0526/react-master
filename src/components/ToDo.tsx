import styled from "styled-components";
import { IToDo } from "../atoms";

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

function ToDo({text, category}:IToDo){
    return (
        <li>
            <ToDoText>{text}</ToDoText>
            <ToDoButton>To Do</ToDoButton>
            <DoingButton>Doing</DoingButton>
            <DoneButton>Done</DoneButton>
        </li>);
}

export default ToDo;