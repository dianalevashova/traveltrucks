import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelTrucks - Camper Rental',
  description: 'Find and rent the camper of your dreams with TravelTrucks',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="uk" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
