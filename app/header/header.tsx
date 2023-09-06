import Filters from './filters/filters';
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Search for books in Google Books</h1>
      <form action="" className={styles.searchForm}>
        <input type="search" name="search-form" id="" className={styles.search} />
        <button className={styles.searchButton}>Search</button>
<Filters/>
      </form>
    </header>
  );
}
