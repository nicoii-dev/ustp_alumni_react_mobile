import HomeScreen from '../screens/home/HomeScreen';
import AnnouncementsScreen from '../screens/announcements/AnnouncementsScreen';
import EventsScreen from '../screens/events/EventsScreen';
import FreedomWallScreen from '../screens/freedom-wall/FreedomWallScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

export const UserTabs = [

  {
    name: 'Freedom Wall',
    component: FreedomWallScreen,
    iconName: 'notes',
  },
  {
    name: 'Announcements',
    component: AnnouncementsScreen,
    iconName: 'campaign',
  },
  {
    name: 'Events',
    component: EventsScreen,
    iconName: 'emoji-events',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    iconName: 'person',
  },
];
