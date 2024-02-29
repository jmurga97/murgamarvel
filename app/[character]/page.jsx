import styles from "@/app/ui/styles/character.module.css";
import Image from "next/image";
import { Heart } from "../ui/icons/heart";
import TriangleBorderBottom from "../ui/icons/triangleborderbottom";
import Comic from "../ui/character/comic";

export default function Page({ params }) {
  console.log(params);
  return (
    <section>
      <div className={styles.characterContainer}>
        <div className={styles.characterInfo}>
          <div className={styles.characterImage}>
            <Image src="/sample.jpg" fill style={{objectFit:'cover'}} alt="prueba" />
          </div>

          <div className={styles.characterText}>
            <div className={styles.characterTitle}>
              <h1>ADAM WARLOCK</h1>
              <Heart size="40" />
            </div>
            <p>
              Created by the Enclave to be part of a race of super humans who
              would abolish war, illness, and crime, Adam Warlock is a unique
              being who uses his immense and formidable powers to safeguard the
              universe.
            </p>
          </div>
        </div>
        <TriangleBorderBottom />
      </div>
      <div className={styles.comicsContainer}>
        <h1>COMICS</h1>
        <div className={styles.comics}>
          <div className={styles.comicsList}>
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
          </div>
        </div>
      </div>
    </section>
  );
}
