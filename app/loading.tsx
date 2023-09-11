import styles from './loading.module.css'

export default function Loading() {
  return <div className={styles.loadingRing}><span className='visually-hidden'>Loading</span></div>;
}
