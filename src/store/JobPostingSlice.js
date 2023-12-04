/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  jobPosting: {}
};

const JobPostingSlice = createSlice({
  name: 'jobPosting',
  initialState,
  reducers: {
    setJobPosting: (state, action) => {
      return {
        ...state,
        jobPosting: action.payload,
      };
    },
  },
});
export const {setJobPosting} = JobPostingSlice.actions;
export default JobPostingSlice.reducer;
