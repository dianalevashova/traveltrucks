import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TravelTrucks - Find Your Perfect Camper',
  description:
    'Rent the camper of your dreams for your next road trip adventure.',
};

export default function Home() {
  return (
    <main>
      <div className={styles.page}>
        <Hero />
      </div>
    </main>
  );
}
