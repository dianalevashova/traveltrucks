import { api } from './api';
import type {
  CampersResponse,
  CamperDetails,
  CamperReview,
  CampersFilters,
  BookingRequest,
  BookingResponse,
} from '../../types/camper';

export interface CampersQueryParams {
  page?: number;
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
}

export const getCampers = async (params: CampersQueryParams) => {
  const { data } = await api.get<CampersResponse>('/campers', { params });
  return data;
};

export const getCamperById = async (id: string) => {
  const { data } = await api.get<CamperDetails>(`/campers/${id}`);
  return data;
};

export const getCamperReviews = async (id: string) => {
  const { data } = await api.get<CamperReview[]>(`/campers/${id}/reviews`);
  return data;
};

export const getCampersFilters = async () => {
  const { data } = await api.get<CampersFilters>('/campers/filters');
  return data;
};

export const createBookingRequest = async (
  camperId: string,
  body: BookingRequest
) => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    body
  );
  return data;
};
