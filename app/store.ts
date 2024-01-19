import { configureStore } from '@reduxjs/toolkit';

import counterReduce from '@/app/lib/features/counter/counterSlice';
import productReduce from '@/app/lib/features/products/ProductsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReduce,
    products: productReduce,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
