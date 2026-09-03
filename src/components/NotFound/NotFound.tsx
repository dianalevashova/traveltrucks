import Icon from '@/components/Icon/Icon';
import styles from './NotFound.module.css';
import Image from 'next/image';

interface NotFoundProps {
  onClearFilters: () => void;
}

export default function NotFound({ onClearFilters }: NotFoundProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/notFound.png"
        alt="No campers found"
        width={488}
        height={463}
        className={styles.illustration}
      />

      <h2 className={styles.title}>No campers found</h2>
      <p className={styles.subtitle}>
        We couldn`t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={onClearFilters}
          className={styles.clearBtn}
        >
          <Icon name="close" width={16} height={16} />
          Clear filters
        </button>
        <button
          type="button"
          onClick={onClearFilters}
          className={styles.viewAllBtn}
        >
          View all campers
        </button>
      </div>
    </div>
  );
}
