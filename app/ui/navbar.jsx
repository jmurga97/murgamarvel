'use client'
import Image from "next/image";
import Favorite from "./favorite";
import styles from './styles/navbar.module.css'
import Link from "next/link";
import { useAppContext } from "../context";

const Header = () => {
    const {likes, setLikes} = useAppContext()

    console.log(likes)
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <Image src='/marvelogo.png' alt="Logo Marvel" width={120} height={42}/>
            </Link>
            <div>
                <Favorite likes={likes.length}/>
            </div>
        </nav>
     );
}


export default Header;