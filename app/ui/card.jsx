'use client'
import Image from "next/image";
import styles from './styles/card.module.css'
import {Heart} from './icons/heart'
import Link from "next/link";
import {useState} from 'react'
import TriangleBorderBottom from "./icons/triangleborderbottom";
import { useAppContext } from "../context";
const Card = ({id}) => {
    const [isHovered, setIsHovered] = useState(false)
    const {likes, setLikes} = useAppContext()
    const isLiked = likes ? likes.some((character) => (character.id === id)) : false
    let fill = isLiked ? '#EC1D24' : 'transparent'
    if(isHovered && isLiked){
        fill = 'white'
    }
    const onSetLike = () => {
        if (isLiked) {
            setLikes((previous) => {
                const newState = previous.filter((character) => character.id !== id);
                return newState;
            });
        } else {
            setLikes((previous) => [...previous, { id }]);
        }
    };


    return (
        <div className={styles.cardContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Image src='/sample.jpg' alt='test' width={190} height={190}/>
            <div style={{position: 'relative'}}>
                <div className={styles.cardDetail}></div>
                <div className={styles.cardInfo}>
                    <Link href='/' className={styles.cardLink}>ADAM {id}</Link>

                    <Heart isLiked={isLiked} fill={fill} size="28"  onClick={onSetLike}/>

                    <TriangleBorderBottom/>
                </div>
            </div>
        </div>
     );
}

export default Card;