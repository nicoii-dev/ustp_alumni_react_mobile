/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

// screens
import LoginScreen from '../../screens/auth/login/LoginScreen';
import ForgotPasswordScreen from '../../screens/auth/forgot-password/ForgotPassword';

// stack instance
const AuthStack = createStackNavigator();

const Auth = ({navigation}) => {
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
    const unsubscribeRemove = navigation?.addListener('beforeRemove', (e) => {
      if (e && e.data.action.type === 'GO_BACK') {
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
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;

Auth.propTypes = {
  navigation: PropTypes.object,
};
