import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camper Details - TravelTrucks',
  description: 'View camper details, gallery, reviews and book your trip.',
};

export default function CamperDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}