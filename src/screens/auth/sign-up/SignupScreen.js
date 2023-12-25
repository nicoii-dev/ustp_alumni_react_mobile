/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import _ from 'lodash';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
// styles
import SignupScreenStyles from './signup-screen-style';

import {UserRegistration} from '../../../library/api/userApi';
import {SignupSchema} from '../../../library/yup-schema/signupSchema';
// components
import UstpImages from '../../../config/images/ustp-images';
import SignupComponent from '../../../components/screen/auth/signup/SignupComponent';
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import ButtonComponent from '../../../components/input/button/ButtonComponent';

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const defaultValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: 'male',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    control,
    // setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async data => {
    console.log(data);
    const payload = {
      first_name: data.firstName,
      middle_name: data.middleName,
      last_name: data.lastName,
      gender: data.gender,
      phone_number: data.phoneNumber,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
    };
    dispatch(loadingStart());
    try {
      const response = await UserRegistration(payload);
      console.log(response);
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
            'Signing up is successful. Please check your email for verification.',
            Toast.LONG,
            Toast.CENTER,
          );
        return navigation.goBack()
      }
    } catch (error) {
      console.log(error);
      dispatch(loadingFinish());
    }
  };

  return (
    <View style={SignupScreenStyles.container}>
      <FastImage source={UstpImages.ustpLogo} style={SignupScreenStyles.logo} />
      <View style={SignupScreenStyles.formWrapper}>
        <View style={SignupScreenStyles.signinContainer}>
          <Text style={SignupScreenStyles.signinText}>Welcome to</Text>
          <Text style={SignupScreenStyles.signinText}>Alumnus Mobile App</Text>
        </View>

        <ScrollView style={SignupScreenStyles.formContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
            <View
              style={{
                width: '70%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <SignupComponent control={control} errors={errors} />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

        <View
          style={{
            marginTop: heightPercentageToDP(2),
            marginBottom: 30,
            width: '80%',
          }}>
          <ButtonComponent
            onPress={handleSubmit(onSubmit)}
            color="#2C74B3"
            size="lg"
            styles={{}}>
            <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
              Sign up
            </Text>
          </ButtonComponent>
        </View>
        <View style={{bottom: 20, alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{textDecorationLine: 'underline', color: 'black'}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
