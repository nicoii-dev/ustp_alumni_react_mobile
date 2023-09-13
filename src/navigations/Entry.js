import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// screens
import SplashScreen from '../screens/splash/SplashScreen';

// stack components
import Loader from '../components/loader/QrLoading';
import UserTab from './tabs/user-tab';

// stack instance
const EntryStack = createStackNavigator();

const Entry = () => {
  return (
    <>
      <NavigationContainer>
        <EntryStack.Navigator screenOptions={{gestureEnabled: false}}>
          <EntryStack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <EntryStack.Screen
            name="UserTab"
            component={UserTab}
            options={{headerShown: false}}
          />
        </EntryStack.Navigator>
      </NavigationContainer>
      <Loader />
    </>
  );
};

export default Entry;
