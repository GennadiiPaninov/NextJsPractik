import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {useEpisodes} from "@/assets/hooks/useEpisodes";
import {EpisodeType, Nullable} from "@/assets/types";


export const getStaticProps = (async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}episode`)
    const resp = await res.json()
    return { props: { resp } }
    }
)


function Episodes({resp}:any) {
    const epis = resp.results as Nullable<EpisodeType[]>
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