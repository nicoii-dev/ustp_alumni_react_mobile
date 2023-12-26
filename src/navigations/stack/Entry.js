/* eslint-disable react/prop-types */
import React, {useState, useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// screens
import SplashScreen from '../../screens/splash/SplashScreen';

// stack components
import UserTab from '../tabs/user-tab';
import AuthStack from './Auth';
import SetupProfile from './SetupProfileStack';

// stack instance
const EntryStack = createStackNavigator();

const Entry = ({navigation}) => {
  const [exitApp, setExitApp] = useState(0);

  const backAction = useCallback(() => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp < 1) {
      setExitApp(exitApp => exitApp + 1);
      Toast.show('Press once again to exit from the application.', Toast.LONG);
    } else if (exitApp >= 1) {
      BackHandler.exitApp();
    }
  }, [exitApp]);
  // * prevent going back to the otp screen
  useEffect(() => {
    // *prevent from returning to loading screen
    const unsubscribeRemove = navigation?.addListener('beforeRemove', e => {
      if (e && e.data.action.type == 'GO_BACK') {
        e.preventDefault();
        // *
        backAction();
      }
    });

    return () => {
      unsubscribeRemove();
    };
  }, [backAction, navigation]);
  return (
    <>
      <EntryStack.Navigator screenOptions={{gestureEnabled: false}}>
        <EntryStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <EntryStack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <EntryStack.Screen
          name="UserTab"
          component={UserTab}
          options={{headerShown: false}}
        />
        <EntryStack.Screen
          name="SetupProfileStack"
          component={SetupProfile}
          options={{headerShown: false}}
        />
      </EntryStack.Navigator>
    </>
  );
};

export default Entry;
