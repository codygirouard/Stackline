import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../lib/store';
import { Product } from 'types';

export interface ProductState {
  product: Product | null;
}

const initialState: ProductState = {
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;
export default productSlice.reducer;
