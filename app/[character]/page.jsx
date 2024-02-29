import styles from "../ui/styles/character.module.css";
import Image from "next/image";
import { Heart } from "../ui/icons/heart";
import TriangleBorderBottom from "../ui/icons/triangleborderbottom";
import Comic from "../ui/character/comic";
import {
  getCharacterById,
  getCharacters,
  getComicsOfCharacterById,
} from "../lib/data";
import { useOnSetLikes } from "../lib/hooks/useOnSetLikes";
import Info from '../ui/character/info'
//De esta manera generamos 50 páginas estáticas para los primeros 50 heroes retornados de la MARVEL API, ordenados por nombre
//si se accede a la ruta /[character] con un id distinto a estos primeros 50 heros habrá un error 404
export async function generateStaticParams() {
  const characters = await getCharacters();

  return characters.map((pj) => ({
    character: pj.id.toString(),
  }));
}

export default async function Page({ params }) {
  const [character] = await getCharacterById(
    params.character
  );
  const {id, name, thumbnail, description } = character
  const img = `${thumbnail.path}.${thumbnail.extension}`
  //const {isLiked, onSetLike} = useOnSetLikes(id,name,img)
  const comics = await getComicsOfCharacterById(params.character);

  return (
    <section>
      <div className={styles.characterContainer}>
        <Info name={name} id={id} description={description} img={img}/>
        {/* <TriangleBorderBottom /> */}
      </div>
      <div className={styles.comicsContainer}>
        <h1>COMICS</h1>
        <div className={styles.comics}>
          <div className={styles.comicsList}>
            {comics.map((comic) => (
              <Comic
                key={comic.id}
                title={comic.title}
                thumbnail={comic.thumbnail}
                onSaleDate={comic.dates[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
