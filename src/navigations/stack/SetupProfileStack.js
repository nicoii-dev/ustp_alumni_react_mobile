/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import JobHistoryScreen from '../../screens/profile/job-history/JobHistoryScreen';
import AddJobHistoryScreen from '../../screens/profile/job-history/AddJobHistoryScreen';
import UpdateJobHistoryScreen from '../../screens/profile/job-history/UpdateJobHistoryScreen';
// stack instance
const SetupProfileStack = createStackNavigator();

const SetupProfile = () => {
  return (
    <SetupProfileStack.Navigator initialRouteName="JobHistoryScreen">
      <SetupProfileStack.Screen
        name="JobHistoryScreen"
        component={JobHistoryScreen}
        options={{headerShown: false}}
      />
      <SetupProfileStack.Screen
        name="AddJobHistoryScreen"
        component={AddJobHistoryScreen}
        options={{headerShown: false}}
      />
      <SetupProfileStack.Screen
        name="UpdateJobHistoryScreen"
        component={UpdateJobHistoryScreen}
        options={{headerShown: false}}
      />
    </SetupProfileStack.Navigator>
  );
};

export default SetupProfile;
