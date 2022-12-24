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
    const {register, handleSubmit, formState} = useForm();
    const onValid = (data:any) => {
        alert(data)
    }
    console.log(formState.errors)

    return (
        <div>
            <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", 
                    {required:"toDo는 핈수입니다.", 
                    minLength:{
                        value:5,
                        message:"길이는 10 이상이여야 합니다."
                    }})} placeholder="Write a to do"/>
                <input {...register("first", {required:"first는 필수입니다."})} placeholder="first"/>
                <input {...register("second", {required:"second는 필수입니다."})} placeholder="second"/>
                <input {...register("third", {required:true})} placeholder="third"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;