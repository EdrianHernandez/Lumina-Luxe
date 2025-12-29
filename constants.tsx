
import { Product } from './types';

export const MOCK_PRODUCT: Product = {
  id: 'lum-001',
  name: 'Lumina X1 Wireless ANC Headphones',
  price: 299.99,
  originalPrice: 349.99,
  category: 'Premium Audio',
  description: 'Experience pure sound with the Lumina X1. Featuring advanced Active Noise Cancellation, 40-hour battery life, and high-fidelity 40mm drivers. Designed for those who demand excellence in every beat.',
  images: [
    { id: '1', url: 'https://picsum.photos/id/26/1200/1200', alt: 'Headphones Front View' },
    { id: '2', url: 'https://picsum.photos/id/20/1200/1200', alt: 'Headphones Side View' },
    { id: '3', url: 'https://picsum.photos/id/48/1200/1200', alt: 'Lifestyle View' },
    { id: '4', url: 'https://picsum.photos/id/160/1200/1200', alt: 'Detail View' },
  ],
  colors: [
    { name: 'Midnight Black', hex: '#0f172a' },
    { name: 'Platinum Silver', hex: '#94a3b8' },
    { name: 'Rose Gold', hex: '#fb7185' },
  ],
  sizes: ['S', 'M', 'L'],
  specs: [
    { label: 'Driver Size', value: '40mm High Fidelity' },
    { label: 'Battery Life', value: 'Up to 40 Hours' },
    { label: 'Connectivity', value: 'Bluetooth 5.2 / USB-C' },
    { label: 'Weight', value: '250g' },
  ],
  reviews: [
    { id: 'r1', user: 'Alex J.', rating: 5, comment: 'The sound clarity is mind-blowing. Best purchase this year.', date: 'Oct 12, 2024' },
    { id: 'r2', user: 'Sarah W.', rating: 4, comment: 'Super comfortable for long flights.', date: 'Oct 08, 2024' },
  ]
};
