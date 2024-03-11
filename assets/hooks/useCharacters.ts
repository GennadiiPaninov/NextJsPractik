import { useEffect, useState } from "react";
import axios from "axios";
import {CharacterType, Nullable} from "@/assets/types";

export const useCharacters =(): Nullable<CharacterType[]> =>{
    const [characters, setCharacters] = useState< Nullable<CharacterType[]>>(null)
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res=>{
                setCharacters(res.data.results)
            })
    },[])
    return characters
}
