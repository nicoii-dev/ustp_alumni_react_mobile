/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import AnnouncementsScreen from '../../screens/announcements/AnnouncementsScreen';
import ViewAnnouncementScreen from '../../screens/announcements/ViewAnnouncement';

// stack instance
const JobPostingStack = createStackNavigator();

const JobPosting = () => {
  return (
    <JobPostingStack.Navigator initialRouteName="Announcement">
      <JobPostingStack.Screen
        name="Announcement"
        component={AnnouncementsScreen}
        options={{headerShown: false}}
      />
      <JobPostingStack.Screen
        name="ViewAnnouncementScreen"
        component={ViewAnnouncementScreen}
        options={{headerShown: false}}
      />
    </JobPostingStack.Navigator>
  );
};

export default JobPosting;
