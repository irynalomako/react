import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";
import './TodoComponent.css'

type TodoPropsType = {
    response:ITodo
}
const TodoComponent : FC<TodoPropsType> = ({response}:TodoPropsType) => {
    return (
        <div>
            <h3 className={response.completed? 'completed' : 'non-completed'}>{response.id} {response.todo}</h3>
        </div>
    )
}
export {
    TodoComponent
}