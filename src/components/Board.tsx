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

interface IBoardProps {
    toDos : string[];
    boardId : string;
}

interface IAreaProps {
    isDraggingOver : boolean;
    isDraggingFromThis: boolean;
}

function Board({toDos, boardId} : IBoardProps){
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) => (
                    <Area 
                        isDraggingOver={snapshot.isDraggingOver} 
                        isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
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