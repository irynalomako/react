import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";
import './TodoComponent.css'

type TodoPropType = {
    value: ITodo
}
export const TodoComponent: FC<TodoPropType> = ({value}: TodoPropType) => {
    return (
        <div>
           <h3 className={value.completed ? 'complete' : 'non-complete'}>{value.id} {value.title}</h3>
        </div>
    );
}