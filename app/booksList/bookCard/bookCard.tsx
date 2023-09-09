import Link from "next/link";
import styles from "./bookCard.module.css";
import { BookData } from "@/utils/googleBooks/interfaces";

export default function BookCard({ bookData }: { bookData: BookData }) {
  const imageURL =
    bookData.volumeInfo?.imageLinks?.small ||
    bookData.volumeInfo?.imageLinks?.thumbnail ||
    bookData.volumeInfo?.imageLinks?.smallThumbnail;
  return (
    <article className={styles.book}>
      <Link href={"/" + bookData.id} className={styles.booksLink}>
        {imageURL && (
          <img
            src={imageURL}
            alt={bookData.volumeInfo.title}
            className={styles.cover}
          />
        )}
        {bookData.volumeInfo.categories?.length > 0 && (
          <p className={styles.category}>
            {bookData.volumeInfo.categories.join(", ")}
          </p>
        )}

        <h3 className={styles.title}>{bookData.volumeInfo.title}</h3>

        {bookData.volumeInfo?.authors?.length > 0 && (
          <p className={styles.author}>
            {bookData.volumeInfo.authors.join(", ")}
          </p>
        )}
      </Link>
    </article>
  );
}
