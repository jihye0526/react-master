import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [cat, setCat] = useRecoilState(categoryState);
    const onInput = (e:React.FormEvent<HTMLSelectElement>) => {
        setCat(e.currentTarget.value);
    }

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={cat} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo/>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </div>
    );
}

export default TodoList;