import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/services/campers';

export const useCamperId = (id: string) => {
  return useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(id),
    enabled: Boolean(id),
  });
};
