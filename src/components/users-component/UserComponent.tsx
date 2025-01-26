import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import './UserComponentStyle.css'
interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user}: UserComponentProps) => {
    return(
        <div className ='Info'>
            <h3> {user.firstName} {user.lastName}</h3>
            <p> username: {user.username} </p>
            <p> password: {user.password}</p>
        </div>
    )
}