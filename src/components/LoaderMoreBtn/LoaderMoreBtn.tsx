import styles from './LoaderMoreBtn.module.css';

export default function LoaderMoreBtn() {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <span className={styles.spinner} />
        <div className={styles.info}>
          <p className={styles.title}>Loading tracks...</p>
          <p className={styles.subtitle}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
}
