'use client'
import styles from "./styles/search.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

const TYPING_DELAY = 500;

const Search = ({results}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((search) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, TYPING_DELAY);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
          type="text"
          placeholder="Buscar un personaje..."
        />
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

      <p>{results} resultados</p>
    </div>
  );
};

export default Search;
