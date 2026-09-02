import { useQuery } from '@tanstack/react-query';
import { getCamperReviews } from '@/services/campers';

export const useCamperReviews = (id: string) => {
  return useQuery({
    queryKey: ['camperReviews', id],
    queryFn: () => getCamperReviews(id),
  });
};
