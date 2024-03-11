import {PropsWithChildren, ReactElement} from "react";
import {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/Navbar/Navbar";


export const Layout:NextPage<PropsWithChildren> = ({children}) => { // NextPage<PropsWithChildren> типизация для children

    return (
        <main className={`${styles.main}`}>
            <Navbar/>
            {children}
        </main>
    );// общая разметка для всех страниц
};
export const getLayout = (page: ReactElement)=>{// принимает страницу с типом ReactElement
    return <Layout>{page}</Layout> // возвращает Layout с page
}// обозначение layout для страниц
