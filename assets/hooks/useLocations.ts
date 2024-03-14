import { useEffect, useState } from "react";
import axios from "axios";
import {LocationType, Nullable} from "@/assets/types";

export const useLocations =(): Nullable<LocationType[]> =>{
    const [locations, setlocations] = useState< Nullable<LocationType[]>>(null)
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}location`)
            .then(res=>{
                setlocations(res.data.results)

            })
    },[])
    return locations
}
