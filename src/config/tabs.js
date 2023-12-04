import AnnouncementStack from '../navigations/stack/Announcement';
import EventsScreen from '../screens/events/EventsScreen';
import PostStack from '../navigations/stack/Post';
import ProfileScreen from '../screens/profile/ProfileScreen';

export const UserTabs = [
  {
    name: 'PostStack',
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
    component: EventsScreen,
    iconName: 'emoji-events',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    iconName: 'person',
  },
];
