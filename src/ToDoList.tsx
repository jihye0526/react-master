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

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraErrors?:string;
}

function TodoList() {
    const {register, handleSubmit, formState: {errors}, setError} = useForm<IForm>({ defaultValues: {
        email:"@naver.com"
    }}); 
    console.log(errors);
    const onValid = (data:IForm) => {
        if(data.password !== data.password1){
            setError("password1", {message:"Password are not the same"}, {shouldFocus:true});
        }
        //setError("extraErrors", {message:"Server offline."});
    }

    return (
        <div>
            <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                    value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: "Only naver.com emails allowed",
                    },
                })}
                placeholder="Email"
                />
                <span>{errors?.email?.message}</span>
                <input
                {...register("firstName", { required: "write here" })}
                placeholder="First Name"
                />
                <span>{errors?.firstName?.message}</span>
                <input
                {...register("lastName", 
                    { required: "write here", 
                    validate: {
                        noNico : (val) => val.includes("nico") ? "No nicos allowed" : true,
                        noNick : (val) => val.includes("nick") ? "No nicks allowed" : true
                    } })}
                placeholder="Last Name"
                />
                <span>{errors?.lastName?.message}</span>
                <input
                {...register("username", { required: "write here", minLength: 5 })}
                placeholder="Username"
                />
                <span>{errors?.username?.message}</span>
                <input
                {...register("password", { required: "write here", minLength: 5 })}
                placeholder="Password"
                />
                <span>{errors?.password?.message}</span>
                <input
                {...register("password1", {
                    required: "Password is required",
                })}
                placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraErrors?.message}</span>
            </form>
        </div>
    );
}

export default TodoList;