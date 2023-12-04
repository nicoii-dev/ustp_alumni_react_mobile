import {configureStore} from '@reduxjs/toolkit';
import LoaderSlice from './loader/LoaderSlice';
import AnnouncementSlice from './announcement/AnnouncementSlice';
import JobPostingSlice from './JobPostingSlice';

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
    announcement: AnnouncementSlice,
    jobPosting: JobPostingSlice,
  },
});

export default store;
