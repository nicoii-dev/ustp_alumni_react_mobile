import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './slice/CartSlice';
import LoaderSlice from './slice/LoaderSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice,
    loader: LoaderSlice,
  },
});

export default store;
