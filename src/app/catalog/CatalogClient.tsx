'use client';

import CamperItem from '@/components/CamperItem/CamperItem';
import { useCampers } from '@/hooks/useCampers';
import styles from './page.module.css';
import LoadMore from '@/components/LoadMore/LoadMore';
import Filters from '@/components/Filters/Filters';
import { useState } from 'react';
import { CampersQueryParams } from '../../services/campers';
import Loader from '@/components/Loader/Loader';
import LoaderMoreBtn from '@/components/LoaderMoreBtn/LoaderMoreBtn';

export default function CatalogClient() {
  const [filters, setFilters] = useState<Omit<CampersQueryParams, 'page'>>({});
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampers(filters);

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <Filters onApply={setFilters} />
        <div className={styles.content}>
          {isLoading && <Loader />}
          {isError && <p>Something went wrong</p>}
          <ul className={styles.list}>
            {campers.map((camper) => (
              <CamperItem key={camper.id} camper={camper} />
            ))}
          </ul>
          {isFetchingNextPage && <LoaderMoreBtn />}
          {hasNextPage && (
            <LoadMore
              onClick={() => fetchNextPage()}
              isLoading={isFetchingNextPage}
            />
          )}
        </div>
      </div>
    </main>
  );
}