'use client';

import CamperItem from '@/components/CamperItem/CamperItem';
import { useCampers } from '@/hooks/useCampers';
import styles from './page.module.css';
import LoadMore from '@/components/LoadMore/LoadMore';

export default function CatalogPage() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampers({});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  const campers = data?.pages.flatMap(page => page.campers) ?? [];

  return (
    <main>
      <ul className={styles.list}>
        {campers.map(camper => (
          <CamperItem key={camper.id} camper={camper} />
        ))}
      </ul>
      {hasNextPage && (
        <LoadMore
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
        />
      )}
    </main>
  );
}
