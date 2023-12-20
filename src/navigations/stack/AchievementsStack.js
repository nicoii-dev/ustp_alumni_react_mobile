/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import AchievementsScreen from '../../screens/profile/achievements/AchievementsScreen';
import AddAchievementScreen from '../../screens/profile/achievements/AddAchievementScreen';
import UpdateAchievementScreen from '../../screens/profile/achievements/UpdateAchievementScreen';
// stack instance
const AchievementsStack = createStackNavigator();

const Achievements = () => {
  return (
    <AchievementsStack.Navigator initialRouteName="AchievementsScreen">
      <AchievementsStack.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
        options={{headerShown: false}}
      />
      <AchievementsStack.Screen
        name="AddAchievementsScreen"
        component={AddAchievementScreen}
        options={{headerShown: false}}
      />
      <AchievementsStack.Screen
        name="UpdateAchievementsScreen"
        component={UpdateAchievementScreen}
        options={{headerShown: false}}
      />
    </AchievementsStack.Navigator>
  );
};

export default Achievements;
