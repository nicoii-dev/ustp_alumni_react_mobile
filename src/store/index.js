import {configureStore} from '@reduxjs/toolkit';
import LoaderSlice from './loader/LoaderSlice';
import AnnouncementSlice from './announcement/AnnouncementSlice';
import JobPostingSlice from './JobPostingSlice';
import commentSlice from './commentSlice';
import EmploymentDetailsSlice from './EmploymentDetailsSlice';

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
    announcement: AnnouncementSlice,
    jobPosting: JobPostingSlice,
    comment: commentSlice,
    employmentDetails: EmploymentDetailsSlice,
  },
});

export default store;
