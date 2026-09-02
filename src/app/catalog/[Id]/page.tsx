'use client';

import { useParams } from 'next/navigation';
import { useCamperId } from '@/hooks/useCamperId';
import Icon from '@/components/Icon/Icon';
import styles from './page.module.css';
import { useCamperReviews } from '@/hooks/useCamperReview';
import Reviews from '@/components/Reviews/Reviews';
import Gallery from '@/components/Gallery/Gallery';
import FormBooking from '@/components/FormBooking/FormBooking';

const addSpaceBeforeUnit = (value: string) =>
  value.replace(/(\d)([a-zA-Z])/, '$1 $2').replace('/', ' / ');

export default function CamperDetailsPage() {
  const { Id } = useParams<{ Id: string }>();
  const { data: camper, isLoading, isError } = useCamperId(Id);
  const { data: reviews } = useCamperReviews(Id);

  if (!Id || isLoading) return <p>Loading...</p>;
  if (isError || !camper) return <p>Camper not found</p>;

  return (
    <main className={styles.main}>
      <div className={styles.mainBlock}>
        <Gallery images={camper.gallery} name={camper.name} />
        <div className={styles.twoSection}>
          <div className={styles.section}>
            <h1 className={styles.name}>{camper.name}</h1>
            <div className={styles.info}>
              <span className={styles.rating}>
                <Icon name="star" width={16} height={16} />
                {camper.rating} ({camper.totalReviews} Reviews)
              </span>
              <span className={styles.location}>
                <Icon name="map" width={16} height={16} />
                {camper.location}
              </span>
            </div>
            <p className={styles.price}>€{camper.price}</p>
            <p className={styles.description}>{camper.description}</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Vehicle details</h2>
            <ul className={styles.amenitiesList}>
              <li className={styles.amenityTag}>{camper.transmission}</li>
              <li className={styles.amenityTag}>{camper.engine}</li>
              {camper.amenities.map(amenity => (
                <li key={amenity} className={styles.amenityTag}>
                  {amenity}
                </li>
              ))}
              <li className={styles.amenityTag}>
                {camper.form.replace('_', ' ')}
              </li>
            </ul>

            <ul className={styles.detailsList}>
              <li className={styles.detailsRow}>
                <span>Form</span>
                <span className={styles.formType}>
                  {camper.form.replace('_', ' ')}
                </span>
              </li>
              <li className={styles.detailsRow}>
                <span>Length</span>
                <span>{addSpaceBeforeUnit(camper.length)}</span>
              </li>
              <li className={styles.detailsRow}>
                <span>Width</span>
                <span>{addSpaceBeforeUnit(camper.width)}</span>
              </li>
              <li className={styles.detailsRow}>
                <span>Height</span>
                <span>{addSpaceBeforeUnit(camper.height)}</span>
              </li>
              <li className={styles.detailsRow}>
                <span>Tank</span>
                <span>{addSpaceBeforeUnit(camper.tank)}</span>
              </li>
              <li className={styles.detailsRow}>
                <span>Consumption</span>
                <span>{addSpaceBeforeUnit(camper.consumption)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.revForm}>
        <Reviews reviews={reviews} />
        <FormBooking camperId={camper.id} />
      </div>
    </main>
  );
}
