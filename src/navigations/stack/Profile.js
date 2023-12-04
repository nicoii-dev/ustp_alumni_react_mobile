/* eslint-disable react/display-name */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import ProfileScreen from '../../screens/profile/ProfileScreen';
import PersonalInfoScreen from '../../screens/profile/personal-info/PersonalInfoScreen';
import SecurityScreen from '../../screens/profile/security/SecurityScreen';
import AboutScreen from '../../screens/profile/about/AboutScreen';

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
          name="AboutScreen"
          component={AboutScreen}
          options={{headerShown: false}}
        />
      </ProfileStack.Navigator>
    </>
  );
};

export default Profile;
