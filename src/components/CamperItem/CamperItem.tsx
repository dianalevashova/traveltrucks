import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/Icon/Icon';
import styles from './CamperItem.module.css';
import { CamperListItem } from '@/types/camper';

interface CamperItemProps {
  camper: CamperListItem;
}

export default function CamperItem({ camper }: CamperItemProps) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    coverImage,
    totalReviews,
    engine,
    transmission,
    form,
  } = camper;

  return (
    <li className={styles.onecard}>
      <div className={styles.imageWrapper}>
        <Image src={coverImage} alt={name} fill className={styles.image} />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>€{price}</p>
        </div>
        <div className={styles.basicInfo}>
          <div className={styles.icons}>
            <span className={styles.rating}>
              <Icon name="star" width={16} height={16} />
              {rating} ({totalReviews} Reviews)
            </span>
            <span className={styles.location}>
              <Icon name="map" width={16} height={16} />
              {location}
            </span>
          </div>

          <p className={styles.description}>{description}</p>

          <ul className={styles.tags}>
            <li className={styles.tag}>
              <Icon name="petrol" width={20} height={20} />
              {engine}
            </li>
            <li className={styles.tag}>
              <Icon name="manual" width={20} height={20} />
              {transmission}
            </li>
            <li className={styles.tag}>
              <Icon name="car" width={20} height={20} />
              {form}
            </li>
          </ul>

          <Link
            href={`/catalog/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.showMore}
          >
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
}
