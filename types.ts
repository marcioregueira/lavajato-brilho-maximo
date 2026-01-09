import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
  category: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}