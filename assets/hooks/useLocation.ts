import { useEffect, useState } from "react";
import axios from "axios";
import {LocationType, Nullable} from "@/assets/types";
import {useRouter} from "next/router";

export const useLocation =(): Nullable<LocationType> =>{
    const [location, setlocation] = useState< Nullable<LocationType>>(null)
    const router = useRouter() // для того чтобы отследить за каким персонажем мы обращаемся
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}location/${router.query.id}`)
            .then(res=>{
                setlocation(res.data)
            })
    },[])
    return location
}
