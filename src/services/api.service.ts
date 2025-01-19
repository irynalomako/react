import {ITodos} from "../models/ITodos.ts";

const getTodo = async ():Promise<ITodos> => {
    return await fetch(import.meta.env.VITE_API_URL + '/todos')
        .then (res => res.json())
}
export {
    getTodo
}