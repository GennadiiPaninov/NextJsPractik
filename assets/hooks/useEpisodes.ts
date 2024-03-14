import { useEffect, useState } from "react";
import axios from "axios";
import { EpisodeType, Nullable} from "@/assets/types";

export const useEpisodes =(): Nullable<EpisodeType[]> =>{
    const [episodes, setEpisodes] = useState< Nullable<EpisodeType[]>>(null)

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}episode`)
            .then(res=>{
                setEpisodes(res.data.results)
            })
    },[])
    return episodes
}
