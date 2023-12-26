/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  personalDetails: [],
  employmentDetails: [],
  trainings: [],
  educational: [],
  address: [],
};

const SetupProfileSlice = createSlice({
  name: 'setupProfile',
  initialState,
  reducers: {
    setPersonalDetails: (state, action) => {
      return {
        ...state,
        personalDetails: action.payload,
      };
    },
    setEmploymentDetails: (state, action) => {
      return {
        ...state,
        employmentDetails: action.payload,
      };
    },
    setTrainings: (state, action) => {
      return {
        ...state,
        trainings: action.payload,
      };
    },
    setEducational: (state, action) => {
      return {
        ...state,
        educational: action.payload,
      };
    },
    setAddress: (state, action) => {
      return {
        ...state,
        address: action.payload,
      };
    },
  },
});
export const {
  setPersonalDetails,
  setEmploymentDetails,
  setTrainings,
  setEducational,
  setAddress,
} = SetupProfileSlice.actions;
export default SetupProfileSlice.reducer;
