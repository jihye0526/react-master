import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, toDoState } from "../atoms";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction:column;
    overflow: hidden;
`;

const Title = styled.div`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
        props.isDraggingOver
        ? "#dfe6e9"
        : props.isDraggingFromThis
        ? "#b2bec3"
        : "transparent"};
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

const Form = styled.form`
    width: 100%;
    input {
        width: 100%;
    }
`;

interface IBoardProps {
    toDos : IToDo[];
    boardId : string;
}

interface IAreaProps {
    isDraggingOver : boolean;
    isDraggingFromThis: boolean;
}

interface IForm {
    toDo : string;
}

function Board({toDos, boardId} : IBoardProps){
    const setToDos = useSetRecoilState(toDoState);
    const {register, setValue, handleSubmit} = useForm<IForm>();
    const onValid = ({toDo}:IForm) => {
        const newToDo = {
            id:Date.now(),
            text: toDo
        };
        setToDos(allBoards => {
            return {
                ...allBoards,
                [boardId]: [...allBoards[boardId], newToDo]
            }
        });
        setValue("toDo", "");
    }

    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input 
                    {...register("toDo", {required: true})} 
                    type="text" 
                    placeholder={`Add task on ${boardId}`}
                />
            </Form>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) => (
                    <Area 
                        isDraggingOver={snapshot.isDraggingOver} 
                        isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                        {toDos.map((toDo, idx) => 
                            <DragabbleCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} idx={idx}/>
                        )}
                        {provided.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}

export default Board;