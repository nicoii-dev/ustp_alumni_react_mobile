/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import EmploymentDetailsScreen from '../../screens/profile/employment-details/EmploymentDetails';
import AddEmploymentScreen from '../../screens/profile/employment-details/UpdateEmploymentScreen';
import UpdateEmploymentScreen from '../../screens/profile/employment-details/UpdateEmploymentScreen';
// stack instance
const EmploymentDetailsStack = createStackNavigator();

const Employment = () => {
  return (
    <EmploymentDetailsStack.Navigator initialRouteName="EmploymentDetailsScreen">
      <EmploymentDetailsStack.Screen
        name="EmploymentDetailsScreen"
        component={EmploymentDetailsScreen}
        options={{headerShown: false}}
      />
      <EmploymentDetailsStack.Screen
        name="AddEmploymentScreen"
        component={AddEmploymentScreen}
        options={{headerShown: false}}
      />
      <EmploymentDetailsStack.Screen
        name="UpdateEmploymentScreen"
        component={UpdateEmploymentScreen}
        options={{headerShown: false}}
      />
    </EmploymentDetailsStack.Navigator>
  );
};

export default Employment;
