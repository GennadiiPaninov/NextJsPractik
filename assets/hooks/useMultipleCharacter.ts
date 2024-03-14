import { useEffect, useState } from "react";
import axios from "axios";
import {CharacterType, Nullable} from "@/assets/types";
type useMultipleCharacter={
    arrId: number[]
}
export const useMultipleCharacter =({arrId}: useMultipleCharacter): Nullable<CharacterType[]> =>{
    const [character, setCharacter] = useState< Nullable<CharacterType[]>>(null)
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}character/${arrId}`)
            .then(res=>{
                setCharacter(res.data.results)
            })
    },[])
    return character
}
//types
