import { useState } from "react";
import {useForm} from "react-hook-form";

/*function TodoList() {
    const [toDo, setToDo] = useState("");
    const [toDoError, setToDoError] = useState("");
    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget : {value}
        } = e;
        setToDoError("");
        setToDo(value);
    };
    
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(toDo.length < 10) {
            return setToDoError("To do should be longer");
        }
        console.log("submit");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} placeholder="Write a to do"/>
                <button>Add</button>
                {toDoError !== "" ? toDoError : null}
            </form>
        </div>
    );
}*/

function TodoList() {
    const {register, watch} = useForm();
    console.log(watch())

    return (
        <div>
            <form>
                <input {...register("toDo")} placeholder="Write a to do"/>
                <input {...register("first")} placeholder="first"/>
                <input {...register("second")} placeholder="second"/>
                <input {...register("third")} placeholder="third"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;