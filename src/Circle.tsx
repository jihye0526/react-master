import { useState } from "react";
import styled from "styled-components"

interface ContainerProps {
    bgColor : string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color: ${props => props.bgColor};
    border-radius:100px;
    border:5px solid ${props => props.borderColor}
`;

interface CircleProps {
    bgColor : string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}:CircleProps){
    const [value, setValue] = useState<number|string>(0);
    setValue(2);
    setValue("hello");
    // setValue(true); 에러
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
}

interface playerShape {
    name:string;
    age:number;
}

const sayHello = (playerObj:playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`

sayHello({name:"jihye", age:26})
sayHello({name:"gildong", age:100})

export default Circle;