/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import TrainingsScreen from '../../screens/profile/trainings/TraingsScreen';
import AddTrainingsScreen from '../../screens/profile/trainings/AddTrainingsScreen';
import UpdateTrainingsScreen from '../../screens/profile/trainings/UpdateTrainingsScreen';

// stack instance
const TrainingsStack = createStackNavigator();

const Trainings = () => {
  return (
    <TrainingsStack.Navigator initialRouteName="TrainingsScreen">
      <TrainingsStack.Screen
        name="TrainingsScreen"
        component={TrainingsScreen}
        options={{headerShown: false}}
      />
      <TrainingsStack.Screen
        name="AddTrainingsScreen"
        component={AddTrainingsScreen}
        options={{headerShown: false}}
      />
      <TrainingsStack.Screen
        name="UpdateTrainingScreen"
        component={UpdateTrainingsScreen}
        options={{headerShown: false}}
      />
    </TrainingsStack.Navigator>
  );
};

export default Trainings;
