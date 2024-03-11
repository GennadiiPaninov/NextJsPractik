import { useEffect, useState } from "react";
import axios from "axios";
import {CharacterType, Nullable} from "@/assets/types";
import {useRouter} from "next/router";

export const useCharacter =(): Nullable<CharacterType> =>{
    const [character, setCharacter] = useState< Nullable<CharacterType>>(null)
    const router = useRouter() // для того чтобы отследить за каким персонажем мы обращаемся
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${router.query.id}`)
            .then(res=>{
                setCharacter(res.data)
            })
    },[])
    return character
}
//types
