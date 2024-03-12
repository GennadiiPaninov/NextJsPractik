import React from 'react';
import {getLayout} from "@/components/Layout/Layout";
import Characters from "@/pages/characters";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import Link from "next/link";
import {useLocations} from "@/assets/hooks/useLocations";
import {LocationCard} from "@/components/LocationCard/LocationCards";

function Locations ()  {
    const locations = useLocations()
    return (
        <>
            <HeadMeta title={"Locations"}/>
            {
                locations && locations.map((location)=>(
                    <Link key={location.id} href={`/locations/${location.id}`}>
                        <LocationCard  name={location.name} type={location.type} created={location.created} dimension={location.dimension}/>
                    </Link>

                ))
            }
        </>
    );
}
Locations.getLayout = getLayout // для обертки странички, нашим layout
export default Locations