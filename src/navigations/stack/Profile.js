/* eslint-disable react/display-name */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import ProfileScreen from '../../screens/profile/ProfileScreen';
import PersonalInfoScreen from '../../screens/profile/personal-info/PersonalInfoScreen';
import SecurityScreen from '../../screens/profile/security/SecurityScreen';
import EducationalScreen from '../../screens/profile/educational/EducationScreen';
import Trainings from './TrainingsStack';
import Achievements from './AchievementsStack';
import EmploymentDetailsScreen from '../../screens/profile/employment-details/EmploymentDetails';
import JobHistory from './JobHistoryStack';

// stack instance
const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <>
      <ProfileStack.Navigator
        screenOptions={{gestureEnabled: false}}
        initialRouteName="ProfileScreen">
        <ProfileStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <ProfileStack.Screen
          name="SecurityScreen"
          component={SecurityScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="EducationalScreen"
          component={EducationalScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="AchievementStack"
          component={Achievements}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="TrainingsStack"
          component={Trainings}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="EmploymentDetailsScreen"
          component={EmploymentDetailsScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="JobHistoryStack"
          component={JobHistory}
          options={{headerShown: false}}
        />
      </ProfileStack.Navigator>
    </>
  );
};

export default Profile;
