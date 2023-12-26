/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import SetupPersonal from '../../screens/set-up/personal-details';
import SetupEmploymentDetails from '../../screens/set-up/employment-details';
import SetupTrainings from '../../screens/set-up/trainings';
import SetupEducational from '../../screens/set-up/educational-background';
import SetupAddress from '../../screens/set-up/address';
// stack instance
const SetupProfileStack = createStackNavigator();

const SetupProfile = () => {
  return (
    <SetupProfileStack.Navigator initialRouteName="SetupPersonalDetails">
      <SetupProfileStack.Screen
        name="SetupPersonalDetails"
        component={SetupPersonal}
        options={{headerShown: false}}
      />
      <SetupProfileStack.Screen
        name="SetupEmploymentDetails"
        component={SetupEmploymentDetails}
        options={{headerShown: false}}
      />
      <SetupProfileStack.Screen
        name="SetupTrainings"
        component={SetupTrainings}
        options={{headerShown: false}}
      />
      <SetupProfileStack.Screen
        name="SetupEducational"
        component={SetupEducational}
        options={{headerShown: false}}
      />
      <SetupProfileStack.Screen
        name="SetupAddress"
        component={SetupAddress}
        options={{headerShown: false}}
      />
    </SetupProfileStack.Navigator>
  );
};

export default SetupProfile;
