import Card from "./ui/card";
import Search from "./ui/searchbar";
import styles from "./ui/styles/home.module.css";
import { getCharacters } from "./lib/data";

export default async function Home({ searchParams }) {
  //console.log(searchParams)
  const characters = await getCharacters();

  const search = characters.filter((pj) => {
    const { query } = searchParams;

    if (query) {
      const normalizedQuery = query.toLowerCase().replace(/\s/g, "");
      const normalizaedPjName = pj.name.toLowerCase().replace(/\s/g, "");
      return normalizaedPjName.includes(normalizedQuery);
    }
    return true;
  });

  return (
    <main className={styles.container}>
      <Search results={search?.length} />
      <div className={styles.grid}>
        {search && search.length > 0 ? (
          search.map((pj) => (
            <Card
              key={pj.id}
              id={pj.id}
              name={pj.name}
              img={`${pj.thumbnail.path}.${pj.thumbnail.extension}`}
            />
          ))
        ) : (
          <h1>Character not found</h1>
        )}
      </div>
    </main>
  );
}
