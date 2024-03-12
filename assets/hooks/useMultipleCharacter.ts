import { useEffect, useState } from "react";
import axios from "axios";
import {CharacterType, Nullable} from "@/assets/types";
import {useRouter} from "next/router";
type useMultipleCharacter={
    arrId: number[]
}
export const useMultipleCharacter =({arrId}: useMultipleCharacter): Nullable<CharacterType[]> =>{
    const [character, setCharacter] = useState< Nullable<CharacterType[]>>(null)
    const router = useRouter() // для того чтобы отследить за каким персонажем мы обращаемся
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}character/${arrId}`)
            .then(res=>{
                setCharacter(res.data)
            })
    },[])
    return character
}
//types
