import { Review } from './review';
import { Sale } from './sale';

export type Product = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sale[];
};
