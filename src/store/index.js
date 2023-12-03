import {configureStore} from '@reduxjs/toolkit';
import LoaderSlice from './loader/LoaderSlice';

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
  },
});

export default store;
