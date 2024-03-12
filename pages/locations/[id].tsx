import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {LocationCard} from "@/components/LocationCard/LocationCards";
import {useLocation} from "@/assets/hooks/useLocation";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {useMultipleCharacter} from "@/assets/hooks/useMultipleCharacter";
import Link from "next/link";
import {GetTheIdFromUrl} from "@/assets/utils/getTheIdFromUrl";


function Location() {
    const location = useLocation()
    const arrWithCharactersId = GetTheIdFromUrl({ urls: location?.residents ?? [] })
    const characters = useMultipleCharacter({ arrId: arrWithCharactersId ?? [] })
    return (
        <>
            <HeadMeta title={"Location"}/>

            {
                location && <LocationCard key={location.id} name={location.name} dimension={location.dimension} created={location.created} type={location.type}/>
            }
            {
                characters && characters.map(character=>{
                    return <Link key={character.id} href={`/characters/${character.id}`}>
                        <CharacterCard  character={character}/>
                    </Link>

                })

            }
        </>
    );
}
Location.getLayout = getLayout // для обертки странички, нашим layout
export default Location