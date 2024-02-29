import Card from "./ui/card";
import Search from "./ui/searchbar";
import styles from "./ui/styles/home.module.css";
export default function Home() {
const PUBLIC_API_KEY='3b3e4103b52f7ba8dc299c831d4b55d6'

  return (
    <main style={{ padding: "24px 48px" }}>
      <Search />
      <div className={styles.grid}>
        <Card id="character1" />
        <Card id="character2" />
        <Card id="character3" />
        <Card id="character4" />
        <Card id="character5" />
        <Card id="character6" />
        <Card id="character7" />
      </div>
    </main>
  );
}
