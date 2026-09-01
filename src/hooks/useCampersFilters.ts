import { getCampersFilters } from '@/services/campers';
import { useQuery } from '@tanstack/react-query';

export const useCampersFilters = () => {
  return useQuery({
    queryKey: ['campersFilters'],
    queryFn: getCampersFilters,
    staleTime: Infinity,
  });
};
