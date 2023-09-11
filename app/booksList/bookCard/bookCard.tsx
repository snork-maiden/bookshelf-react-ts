import Link from "next/link";
import styles from "./bookCard.module.css";
import { BookData } from "@/utils/googleBooks/interfaces";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
});
export default function BookCard({ bookData }: { bookData: BookData }) {
  const imageURL =
    bookData.volumeInfo?.imageLinks?.small ||
    bookData.volumeInfo?.imageLinks?.thumbnail ||
    bookData.volumeInfo?.imageLinks?.smallThumbnail;
  return (
    <article className={styles.book}>
      <Link href={"/" + bookData.id} className={styles.booksLink}>
        <div className={styles.imageWrapper}>
          {imageURL && (
            <img
              src={imageURL}
              alt={bookData.volumeInfo.title}
              className={styles.cover}
            />
          )}
        </div>

        {bookData.volumeInfo.categories?.length > 0 && (
          <p className={styles.category}>
            {bookData.volumeInfo.categories.join(", ")}
          </p>
        )}
        <div className={styles.titleWrapper}>
          <h3 className={playfairDisplay.className}>
            {bookData.volumeInfo.title}
          </h3>
        </div>

        {bookData.volumeInfo?.authors?.length > 0 && (
          <p className={styles.author}>
            {bookData.volumeInfo.authors.join(", ")}
          </p>
        )}
      </Link>
    </article>
  );
}
