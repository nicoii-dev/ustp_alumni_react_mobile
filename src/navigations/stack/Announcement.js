/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import AnnouncementsScreen from '../../screens/announcements/AnnouncementsScreen';
import ViewAnnouncementScreen from '../../screens/announcements/ViewAnnouncement';

// stack instance
const AnnouncementStack = createStackNavigator();

const Announcement = () => {
  return (
    <AnnouncementStack.Navigator initialRouteName="Announcement">
      <AnnouncementStack.Screen
        name="Announcement"
        component={AnnouncementsScreen}
        options={{headerShown: false}}
      />
      <AnnouncementStack.Screen
        name="ViewAnnouncementScreen"
        component={ViewAnnouncementScreen}
        options={{headerShown: false}}
      />
    </AnnouncementStack.Navigator>
  );
};

export default Announcement;
