"use client";
import Image from "next/image";
import styles from "./styles/card.module.css";
import { Heart } from "./icons/heart";
import Link from "next/link";
import { useState } from "react";
import TriangleBorderBottom from "./icons/triangleborderbottom";
import { useOnSetLikes } from "../lib/hooks/useOnSetLikes";

const Card = ({ id, name, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isLiked, onSetLike } = useOnSetLikes(id,name,img);

  let fill = isLiked ? "#EC1D24" : "transparent";
  if (isHovered && isLiked) {
    fill = "white";
  }

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardImage}>
        <Image src={img} alt="test" fill style={{objectFit:'cover'}} />
      </div>

      <div style={{ position: "relative" }}>
        <div className={styles.cardDetail}></div>
        <div className={styles.cardInfo}>
          <Link href={`/${id}`} className={styles.cardLink}>
            {name}
          </Link>

          <Heart isLiked={isLiked} fill={fill} size="28" onClick={onSetLike} />

          <TriangleBorderBottom />
        </div>
      </div>
    </div>
  );
};

export default Card;
