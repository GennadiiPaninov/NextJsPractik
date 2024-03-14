import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {EpisodeType, Nullable} from "@/assets/types";
import {GetStaticProps} from "next";
import {useState} from "react";


export const getServerSideProps = (async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}episode`)
    const resp = await res.json()
    const result = resp.results
    if (!result) {
       return {
          notFound: true,
        }
    }
    return { props: { result },
    }
    }
) satisfies GetStaticProps<{ // satisfies это для гибкой типизации
    result: EpisodeType[]
}>

type PropsType = {
    result: Nullable<EpisodeType[]>
}

function Episodes({result}: PropsType) {
    console.log(result)
    const epis = result
    return (
        <>
            <HeadMeta title={"Characters"}/>
            {epis && epis.map((episode)=>{
                return <div key={episode.id}>{episode.name}</div>
            }) }
        </>
    );
}
Episodes.getLayout = getLayout // для обертки странички, нашим layout
export default Episodes