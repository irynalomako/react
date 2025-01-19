import {useEffect, useState} from "react";
import {getTodo} from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {ITodos} from "../../models/ITodos.ts";
import {ITodo} from "../../models/ITodo.ts";


const TodoComponents = () => {
    const [todo, setTodo] = useState<ITodo[]>([])
    useEffect( () => {
        getTodo()
            .then( ({todos}:ITodos) => {
                setTodo(todos);
            });
        }, []);
    return (
        <div>
            {
            todo.map(todo => <TodoComponent key={todo.id} response={todo}/>)
            }
        </div>
    );
};
export {
    TodoComponents
}