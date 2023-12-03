/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const LoaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loadingStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loadingFinish: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});
export const {loadingStart, loadingFinish} = LoaderSlice.actions;
export default LoaderSlice.reducer;
