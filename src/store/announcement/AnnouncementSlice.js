/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  announcement: {}
};

const AnnouncementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    setAnnouncement: (state, action) => {
      return {
        ...state,
        announcement: action.payload,
      };
    },
  },
});
export const {setAnnouncement} = AnnouncementSlice.actions;
export default AnnouncementSlice.reducer;
