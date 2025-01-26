import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.servise.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {UserComponent} from "./UserComponent.tsx";


export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponse & {users: IUser[]}>('/users')
            .then(({users}) => {
                setUsers(users)
            });
    }, []);
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    )
}