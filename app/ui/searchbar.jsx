import styles from './styles/search.module.css'

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Buscar un personaje..." />
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>

      <p>50 resultados</p>
    </div>
  );
};

export default Search;
