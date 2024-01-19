import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: { rate: number; count: number };
}

interface IState {
  status: {
    loading: boolean;
    errors?: {
      message: string;
    }[];
  };
  products: IProducts[];
}

const initialState: IState = {
  status: {
    loading: true,
  },
  products: [],
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching(state) {
      state.status.loading = true;
    },
    productsFetchingSucces(state, action: PayloadAction<IProducts[]>) {
      state.status.loading = false;
      state.products = action.payload;
    },
    productsFetchingError(
      state,
      action: PayloadAction<
        {
          message: string;
        }[]
      >,
    ) {
      state.status.loading = false;
      state.status.errors = action.payload;
    },
  },
});

export default ProductsSlice.reducer;
