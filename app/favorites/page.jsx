"use client";
import { useAppContext } from "../context";
import styles from "../ui/styles/home.module.css";
import Card from "../ui/card";

const Favorites = () => {
  const { likes } = useAppContext();

  return (
    <main className={styles.container}>
      <h1>FAVORITOS</h1>
      <div className={styles.grid}>
        {likes && likes.length > 0 ? (
          likes.map((pj) => (
            <Card
              key={pj.id}
              id={pj.id}
              name={pj.name}
              img={pj.img}
            />
          ))
        ) : (
          <h1>No favorite characters yet</h1>
        )}
      </div>
    </main>
  );
};

export default Favorites;
