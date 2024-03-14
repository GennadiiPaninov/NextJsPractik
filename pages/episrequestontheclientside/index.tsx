import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {EpisodeType, Nullable} from "@/assets/types";
import {GetStaticProps} from "next";
import {useState} from "react";


// export const getStaticProps = (async ()=>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}episode`)
//     const resp = await res.json()
//     const result = resp.results
//
//     return { props: { result },
//     revalidate: 10
//     }
//     }
// ) satisfies GetStaticProps<{ // satisfies это для гибкой типизации
//     result: EpisodeType[]
// }>

type PropsType = {
    result: Nullable<EpisodeType[]>
}

function Episodes({result}: PropsType) {

    const episodesList = result?.map((episode)=>{
        return <div key={episode.id}>{episode.name}</div>
    })

    return (
        <>
            <HeadMeta title={"Episodes"}/>
            {episodesList}
        </>
    );
}
Episodes.getLayout = getLayout // для обертки странички, нашим layout
export default Episodes