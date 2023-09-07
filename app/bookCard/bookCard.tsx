import Image from "next/image";
import styles from "./bookCard.module.css";

export default function BookCard() {
  return (
    <article className={styles.book}>
    <a href="" className={styles.booksLink}>
      <Image src="" alt="" className={styles.cover} />
      <p className={styles.category}></p>
      <h3 className={styles.title}></h3>
      <p className={styles.author}></p>
    </a>
  </article>
  );
}
