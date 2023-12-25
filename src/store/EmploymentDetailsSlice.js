/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  yesDetails: [],
  noDetails: [],
};

const EmploymentDetailsSlice = createSlice({
  name: 'employmentDetails',
  initialState,
  reducers: {
    setYesDetails: (state, action) => {
      return {
        ...state,
        yesDetails: action.payload,
      };
    },
    setNoDetails: (state, action) => {
      return {
        ...state,
        noDetails: action.payload,
      };
    },
  },
});
export const {setYesDetails, setNoDetails} = EmploymentDetailsSlice.actions;
export default EmploymentDetailsSlice.reducer;
