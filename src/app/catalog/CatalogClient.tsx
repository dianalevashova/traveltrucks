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
import NotFound from '@/components/NotFound/NotFound';

const emptyFormValues = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};
export default function CatalogClient() {
  const [filters, setFilters] = useState<Omit<CampersQueryParams, 'page'>>({});
  const [formValues, setFormValues] = useState(emptyFormValues);
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampers(filters);

  const campers = data?.pages.flatMap(page => page.campers) ?? [];
  const handleSearch = () => {
    setFilters({
      location: formValues.location || undefined,
      form: formValues.form || undefined,
      engine: formValues.engine || undefined,
      transmission: formValues.transmission || undefined,
    });
  };
  const handleClearFilters = () => {
    setFormValues(emptyFormValues);
    setFilters({});
  };

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <Filters
          values={formValues}
          onChange={setFormValues}
          onSearch={handleSearch}
          onClear={handleClearFilters}
        />
        <div className={styles.content}>
          {isLoading && <Loader />}
          {isError && <p>Something went wrong</p>}
          {!isLoading && campers.length === 0 ? (
            <NotFound onClearFilters={handleClearFilters} />
          ) : (
            <>
              <ul className={styles.list}>
                {campers.map((camper, index) => (
                  <CamperItem
                    key={camper.id}
                    camper={camper}
                    isPriority={index === 0}
                  />
                ))}
              </ul>
              {isFetchingNextPage && <LoaderMoreBtn />}
              {hasNextPage && (
                <LoadMore
                  onClick={() => fetchNextPage()}
                  isLoading={isFetchingNextPage}
                />
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
