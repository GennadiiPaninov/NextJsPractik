import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";


function Home() {
  return (
    <>
      <HeadMeta title={"Create Next App"}/>
    </>
  );
}
Home.getLayout = getLayout // для обертки странички, нашим layout
export default Home