import { AppDispatch } from '@/app/store';
import { IProducts, ProductsSlice } from './ProductsSlice';
import axios, { AxiosError } from 'axios';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ProductsSlice.actions.productsFetching());
    let response = await axios.get<IProducts[]>(
      'https://fakestoreapi.com/products',
    );
    dispatch(ProductsSlice.actions.productsFetchingSucces(response.data));
  } catch {
    dispatch(
      ProductsSlice.actions.productsFetchingError([{ message: 'Error Fetch' }]),
    );
  }
};
