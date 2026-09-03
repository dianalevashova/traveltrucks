# TravelTrucks

A frontend web application for TravelTrucks - a camper van rental company. Users
can browse a catalog of campers, filter them by location, body type, engine, and
transmission, view detailed information about each camper (specs, gallery,
reviews), and submit a booking request.

Live demo: https://traveltrucks-rosy-seven.vercel.app/

## Features

- Home page with a hero banner and a call-to-action leading to the catalog
- Catalog page
  - Camper list fetched from the backend with infinite pagination (Load More)
  - Filtering by location (text), camper form, engine type, and transmission
    (all backend-driven via query parameters)
  - Empty state when no campers match the selected filters
- Camper details page (opens in a new tab)
  - Full camper specifications and amenities
  - Image gallery with a synced thumbnail strip
  - Customer reviews with a 5-star rating display
  - Booking request form with validation and a success/error notification
- Loading indicators for all asynchronous requests

## Tech Stack

- Next.js (App Router) + TypeScript
- TanStack Query - data fetching, caching, and useInfiniteQuery for pagination
- Formik + Yup - booking form and validation
- Swiper - image gallery
- iziToast - booking success/error notifications
- React Icons + a custom SVG sprite for icons
- CSS Modules for styling
- Axios for HTTP requests

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

git clone https://github.com/dianalevashova/traveltrucks.git cd travel-trucks
npm install

### Running locally

npm run dev

The app will be available at http://localhost:3000

### Building for production

npm run build npm run start

### Linting and formatting

npm run lint npm run format

## Project Structure

src/ app/ - Next.js App Router pages page.tsx - Home page catalog/ - Catalog
page catalog/[Id]/ - Camper details page components/ - Reusable UI components
hooks/ - Custom React Query hooks services/ - API layer (axios instance,
endpoints) types/
