"use client";
import Image from "next/image";
import Favorite from "./icons/favoriteCount";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { useAppContext } from "../context";

const Header = () => {
  const { likes } = useAppContext();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src="/marvelogo.png" alt="Logo Marvel" width={120} height={42} />
      </Link>
      <div>
        <Link href="/favorites">
          <Favorite likes={likes?.length} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
