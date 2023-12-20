/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import JobHistoryScreen from '../../screens/profile/job-history/JobHistoryScreen';
import AddJobHistoryScreen from '../../screens/profile/job-history/AddJobHistoryScreen';
import UpdateJobHistoryScreen from '../../screens/profile/job-history/UpdateJobHistoryScreen';
// stack instance
const JobHistoryStack = createStackNavigator();

const JobHistory = () => {
  return (
    <JobHistoryStack.Navigator initialRouteName="JobHistoryScreen">
      <JobHistoryStack.Screen
        name="JobHistoryScreen"
        component={JobHistoryScreen}
        options={{headerShown: false}}
      />
      <JobHistoryStack.Screen
        name="AddJobHistoryScreen"
        component={AddJobHistoryScreen}
        options={{headerShown: false}}
      />
      <JobHistoryStack.Screen
        name="UpdateJobHistoryScreen"
        component={UpdateJobHistoryScreen}
        options={{headerShown: false}}
      />
    </JobHistoryStack.Navigator>
  );
};

export default JobHistory;
