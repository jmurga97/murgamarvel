import Image from "next/image";
import styles from "../styles/comic.module.css"

const Comic = () => {
    return (
        <div className={styles.comic}>
            <Image src='/comic.jpg' alt="prueba" width={180} height={270}/>
            <div className={styles.comincInfo}>
                <h1 className={styles.comicTitle}>
                    Who is...? Adam Warlock Infinity Comic #1
                </h1>
                <p>
                    1967
                </p>
            </div>
        </div>
     );
}

export default Comic;