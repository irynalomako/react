import {FC, ReactNode} from "react";
import {ICharacter} from "../../models/ICharacter.ts";
import './CharacterComponentStyle.css'
type CharacterComponentProps = {
    item: ICharacter,
    children: ReactNode,
}
export const CharacterComponent: FC<CharacterComponentProps> = ({item, children}) => {
    return (
        <div className='my-10'>
            <h3 className = 'text-3xl font-bold'>{item.name} {item.surname}, years: {item.age}</h3>
            <div className='content'>
                <img src={item.photo} alt={item.name}/>
                <p>{children}</p>
            </div>
        </div>

    );
};