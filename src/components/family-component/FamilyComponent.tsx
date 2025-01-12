import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import {simpsons} from "../../data/charactersList.ts";

export const FamilyComponent = () => {
    return (
        <div>
            {
            simpsons.map ( (item, index) => <CharacterComponent key={index} item={item}>
                {item.info}
            </CharacterComponent>)
            }
        </div>
    );
};