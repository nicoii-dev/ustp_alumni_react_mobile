/* eslint-disable prettier/prettier */
import React, {useState, useCallback, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {BackHandler} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../config/constants/colors';

import {UserTabs} from '../../config/tabs';

// bottomTabNav instance
const UserNavTab = createBottomTabNavigator();

const UserTab = () => {
  const navigation = useNavigation();
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
    // eslint-disable-next-line react/prop-types
    const unsubscribeRemove = navigation.addListener('beforeRemove', e => {
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
      <UserNavTab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          // tabBarItemStyle: {borderTopWidth: 1, borderBottomWidth: 1},
          tabBarIcon: ({color, size}) => {
            let Tab = UserTabs.find(tab => tab.name === route.name);

            // You can return any component that you like here!
            return <Icon name={Tab.iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.navyBlue,
          tabBarInactiveTintColor: COLORS.skyBlue,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: true,
        })}>
        {UserTabs.map(({name, component}, index) => {
          return (
            <UserNavTab.Screen
              key={index}
              name={name}
              component={component}
              // options={{ tabBarBadge: 3 }}
            />
          );
        })}
      </UserNavTab.Navigator>
    </>
  );
};

export default UserTab;
