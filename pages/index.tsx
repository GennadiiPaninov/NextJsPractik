
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {Navbar} from "@/components/Navbar/Navbar";
import {getLayout} from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <>
      <HeadMeta title={"Create Next App"}/>
    </>
  );
}
Home.getLayout = getLayout // для обертки странички, нашим layout
export default Home