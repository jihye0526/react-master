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
    toDo: string;
    idx: number;
}

function DragabbleCard( { toDo, idx } : IDragabbleCardProps ){
    console.log(toDo, "has been rendered")
    
    return (
        <Draggable key={toDo} draggableId={toDo} index={idx}>
            {(provided, snapshot) => 
                <Card 
                    isDragging={snapshot.isDragging}
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                {toDo}
            </Card>}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);