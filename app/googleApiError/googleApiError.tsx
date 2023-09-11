import styles from "./googleApiError.module.css";

export default function GoogleApiError() {
  return (
    <>
      <div className={styles.error}>
        Oops! Download failed.
        <br />
        Please try again later
      </div>
    </>
  );
}
