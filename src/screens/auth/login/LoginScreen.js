/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

// styles
import LoginScreenStyles from './login-screen-style';

// components
import LoginComponent from '../../../components/screen/auth/login/LoginComponent';
import UstpImages from '../../../config/images/ustp-images';
const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={LoginScreenStyles.container}>
      <FastImage source={UstpImages.ustpLogo} style={LoginScreenStyles.logo} />
      <View style={LoginScreenStyles.formWrapper}>
        <View style={LoginScreenStyles.signinContainer}>
          <Text style={LoginScreenStyles.signinText}>Welcome to</Text>
          <Text style={LoginScreenStyles.signinText}>Alumnus Mobile App</Text>
        </View>
        <View style={LoginScreenStyles.formContainer}>
          <LoginComponent />
        </View>
        <View
          style={{
            width: '100%',
            bottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={{textDecorationLine: 'underline', color: 'black'}}>
              Forgot Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{textDecorationLine: 'underline', color: 'black'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
