import { useState } from "react";

function TodoList() {
    const [toDo, setToDo] = useState("");
    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget : {value}
        } = e;
        setToDo(value);
    };
    
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(toDo);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} placeholder="Write a to do"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;