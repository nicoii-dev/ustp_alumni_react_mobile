/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import JobPostingScreen from '../../screens/job-posting/JobPostingScreen';
import ViewJobPostingScreen from '../../screens/job-posting/ViewJobPostingScreen';

// stack instance
const JobPostingStack = createStackNavigator();

const JobPosting = () => {
  return (
    <JobPostingStack.Navigator initialRouteName="JobPostingScreen">
      <JobPostingStack.Screen
        name="JobPostingScreen"
        component={JobPostingScreen}
        options={{headerShown: false}}
      />
      <JobPostingStack.Screen
        name="ViewJobPostingScreen"
        component={ViewJobPostingScreen}
        options={{headerShown: false}}
      />
    </JobPostingStack.Navigator>
  );
};

export default JobPosting;
