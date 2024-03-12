import Image from "next/image";
import s from './CharacterCard.module.scss'
import {CharacterType} from "@/assets/types";

type CharacterCardType={
    character: CharacterType
}

export const CharacterCard = ({character}: CharacterCardType) => {

    return (
        <div className={s.wrapper}>
            <div>{character.name}</div>
            <Image alt={`Picture of ${character.name}`}  src={character.image} width={300} height={300}/>
        </div>
    );
};{}

