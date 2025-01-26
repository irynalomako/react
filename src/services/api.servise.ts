import {baseUrl} from "../constants/urls.ts";

const getAll = async <T, >(endpoint: string) :Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`)
        .then(res => res.json())
};
export {
    getAll
}
