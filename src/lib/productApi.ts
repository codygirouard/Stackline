import { Product } from '../types';
import productJson from '../assets/stackline_frontend_assessment_data_2021.json';

export function fetchProduct() {
  return new Promise<{ data: Product }>((resolve) =>
    setTimeout(() => resolve({ data: productJson[0] }), 1000)
  );
}
