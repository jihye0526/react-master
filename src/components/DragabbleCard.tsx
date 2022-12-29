import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{isDragging : boolean}>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDragabbleCardProps {
    toDoId: number;
    toDoText: string;
    idx: number;
}

function DragabbleCard( { toDoId, toDoText, idx } : IDragabbleCardProps ){
    console.log(toDoId, "has been rendered")
    
    return (
        <Draggable draggableId={toDoId+""} index={idx}>
            {(provided, snapshot) => 
                <Card 
                    isDragging={snapshot.isDragging}
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                {toDoText}
            </Card>}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);