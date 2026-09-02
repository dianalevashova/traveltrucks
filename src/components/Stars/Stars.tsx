import Icon from '@/components/Icon/Icon';
import styles from './Stars.module.css';

interface StarsProps {
  rating: number;
}

export default function Stars({ rating }: StarsProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.stars}>
      {stars.map(star => (
        <Icon
          key={star}
          name="star"
          width={16}
          height={16}
          className={
            star <= Math.round(rating)
              ? `${styles.star} ${styles.starFilled}`
              : styles.star
          }
        />
      ))}
    </div>
  );
}
