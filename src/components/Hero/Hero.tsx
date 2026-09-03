import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero.jpg"
        alt="Camper van at sunset by the lake"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.text}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className={styles.btn}>
          View Now
        </Link>
      </div>
    </section>
  );
}
