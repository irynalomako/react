import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.service.ts";

export const TodoComponents = () => {
const [todos, setTodos] = useState<ITodo[]>([]);
   useEffect( () => {
        getTodos ()
        .then( (response:ITodo[]) => {
            setTodos(response);
        });
}, []);
    return (
        <div>
            {
              todos.map( response => <TodoComponent key = {response.id} value = {response}/>)
            }
        </div>
    );
};