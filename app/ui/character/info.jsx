"use client";
import styles from "../styles/character.module.css";
import Image from "next/image";
import { Heart } from "../icons/heart";
import { useOnSetLikes } from "../../lib/hooks/useOnSetLikes";

const Info = ({ id, img, name, description }) => {
  const { isLiked, onSetLike } = useOnSetLikes(id, name, img);
  let fill = isLiked ? "#EC1D24" : "transparent";
  return (
    <div className={styles.characterInfo}>
      <div className={styles.characterImage}>
        <Image src={img} fill style={{ objectFit: "cover" }} alt={name} />
      </div>

      <div className={styles.characterText}>
        <div className={styles.characterTitle}>
          <h1>{name}</h1>
          <Heart isLiked={isLiked} fill={fill} size="40" onClick={onSetLike} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Info;
