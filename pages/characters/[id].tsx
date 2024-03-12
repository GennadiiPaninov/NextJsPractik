import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {useCharacter} from "@/assets/hooks/useCharacter";


function Character() {
    const character = useCharacter()


    return (
        <>
            <HeadMeta title={"Character"}/>
            {
                character &&  <CharacterCard key={character.id} character={character}/>
            }
        </>
    );
}
Character.getLayout = getLayout // для обертки странички, нашим layout
export default Character