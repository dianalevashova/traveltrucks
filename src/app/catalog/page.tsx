import type { Metadata } from 'next';
import CatalogClient from './CatalogClient';

export const metadata: Metadata = {
  title: 'Catalog - TravelTrucks',
  description: 'Browse and filter available campers for rent on TravelTrucks.',
};

export default function CatalogPage() {
  return <CatalogClient />;
}
