import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
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
        : props.draggingFromThisWith
        ? "#b2bec3"
        : "transparent"};
    flex-grow:1;
    transition: background-color .3s ease-in-out;
`;

interface IBoardProps {
    toDos : string[];
    boardId : string;
}

interface IAreaProps {
    isDraggingOver : boolean;
    draggingFromThisWith: boolean;
}

function Board({toDos, boardId} : IBoardProps){
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) => (
                    <Area 
                        isDraggingOver={snapshot.isDraggingOver} 
                        draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)} 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                        {toDos.map((toDo, idx) => 
                            <DragabbleCard key={toDo} toDo={toDo} idx={idx}/>
                        )}
                        {provided.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}

export default Board;