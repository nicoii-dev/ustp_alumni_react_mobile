import {configureStore} from '@reduxjs/toolkit';
import LoaderSlice from './loader/LoaderSlice';
import AnnouncementSlice from './announcement/AnnouncementSlice';

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
    announcement: AnnouncementSlice,
  },
});

export default store;
