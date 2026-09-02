import type { CamperReview } from '@/types/camper';
import Stars from '@/components/Stars/Stars';
import styles from './Reviews.module.css';

interface ReviewsProps {
  reviews: CamperReview[] | undefined;
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Reviews</h2>
      <ul className={styles.reviewsList}>
        {reviews?.map(review => (
          <li key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <span className={styles.avatar}>
                {review.reviewer_name.charAt(0)}
              </span>
              <div className={styles.nameStar}>
                <p className={styles.reviewerName}>{review.reviewer_name}</p>
                <Stars rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
