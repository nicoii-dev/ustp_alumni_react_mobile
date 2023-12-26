import {configureStore} from '@reduxjs/toolkit';
import LoaderSlice from './loader/LoaderSlice';
import AnnouncementSlice from './announcement/AnnouncementSlice';
import JobPostingSlice from './JobPostingSlice';
import commentSlice from './commentSlice';
import EmploymentDetailsSlice from './EmploymentDetailsSlice';
import SetupProfileSlice from './SetupProfileSlice';

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
    announcement: AnnouncementSlice,
    jobPosting: JobPostingSlice,
    comment: commentSlice,
    employmentDetails: EmploymentDetailsSlice,
    setupProfile: SetupProfileSlice,
  },
});

export default store;
