import Link from "next/link";
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={s.links}>
            <Link href={`/`}>Main</Link>
            <Link href={`/characters`}>Characters</Link>
            {/* для перехада по страницам   */}
        </div>
    );
};

