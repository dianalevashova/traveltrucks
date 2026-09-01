import { CampersQueryParams, getCampers } from '@/app/services/campers';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useCampers = (filters: Omit<CampersQueryParams, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['campers', filters],
    queryFn: ({ pageParam }) => getCampers({ ...filters, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });
};
