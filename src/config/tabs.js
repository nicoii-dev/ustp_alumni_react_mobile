import AnnouncementStack from '../navigations/stack/Announcement';
import JobPostingStack from '../navigations/stack/JobPosting';
import PostStack from '../navigations/stack/Post';
import ProfileStack from '../navigations/stack/Profile';

export const UserTabs = [
  {
    name: 'Posts',
    component: PostStack,
    iconName: 'notes',
  },
  {
    name: 'Announcements',
    component: AnnouncementStack,
    iconName: 'campaign',
  },
  {
    name: 'Job Posting',
    component: JobPostingStack,
    iconName: 'emoji-events',
  },
  {
    name: 'Profile',
    component: ProfileStack,
    iconName: 'person',
  },
];
