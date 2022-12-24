import { useState } from "react";
import {useForm} from "react-hook-form";

interface IForm {
    toDo: string;
}

function TodoList() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<IForm>();

    const handleValid = (data:IForm) => {
        console.log(data.toDo);
        setValue("toDo", "");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo", {
                        required:"Please write a To Do!!!"
                        })} placeholder="Write a to do"/>
                <button>Add</button>
                <div>{errors?.toDo?.message}</div>
            </form>
        </div>
    );
}

export default TodoList;