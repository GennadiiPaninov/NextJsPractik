import Image from "next/image";
import s from './CharacterCard.module.scss'

type CharacterCardType={
    name: string
    image: string
}
export const CharacterCard = ({ name, image}: CharacterCardType) => {
    return (
        <div className={s.wrapper}>
            <div>{name}</div>
            <Image alt={`Picture of ${name}`} src={image} width={300} height={300}/>
        </div>
    );
};

