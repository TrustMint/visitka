import type { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  // price removed as requested
  icon: ReactNode;
}

export interface ServiceWithColor extends Service {
  colorClass: string;
  iconColor: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
}
