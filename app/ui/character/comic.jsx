import Image from "next/image";
import styles from "../styles/comic.module.css";

const Comic = ({ title, thumbnail, onSaleDate }) => {
  const date = new Date(onSaleDate.date);
  const year = date.getFullYear();
  return (
    <div className={styles.comic}>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        width={180}
        height={270}
      />
      <div className={styles.comincInfo}>
        <h1 className={styles.comicTitle}>{title}</h1>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Comic;
