/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import * as yup from 'yup';

// redux
import { loadingStart, loadingFinish } from '../../../store/loader/LoaderSlice';

// components
import Header from '../../../components/header/Header';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import TextInputController from '../../../components/input/text-input/TextInputController';

// api
import { ForgotPassword, ResetPassword } from '../../../library/api/userApi';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [resetPass, setResetPass] = useState(false);

  const forgotPassSchema = yup
    .object({
      email: yup
        .string()
        .required('Please enter your Email')
        .email('Invalid email format'),
    })
    .required();

  const resetPassSchema = yup
    .object({
      email: yup
        .string()
        .required('Please enter your Email')
        .email('Invalid email format'),
      otp: yup
        .string()
        .required('Please enter your OTP')
        .min(6, 'OTP must be atleast 6 numbers.'),
      newPassword: yup
        .string()
        .required('Please enter your new password')
        .min(6, 'Password must be atleast 6 characters.'),
    })
    .required();

  const defaultValues = {
    email: '',
  };

  const resetDefaultValues = {
    email: '',
    otp: '',
    newPassword: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(resetPass ? resetPassSchema : forgotPassSchema),
    defaultValues: resetPass ? resetDefaultValues : defaultValues,
  });

  const onForgot = async data => {
    dispatch(loadingStart());
    const payload = {
      email: data.email,
    };
    const response = await ForgotPassword(payload);
    if (!_.isUndefined(response)) {
      setResetPass(true);
    }
    dispatch(loadingFinish());
  };

  const onReset = async data => {
    dispatch(loadingStart());
    const payload = {
      email: data.email,
      otp: data.otp,
      password: data.newPassword,
    };
    const response = await ResetPassword(payload);
    if (!_.isUndefined(response)) {
      navigation.navigate('LoginScreen');
    }
    dispatch(loadingFinish());
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  console.log(errors);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
      }}>
      <Header>
        <Icon
          name={'arrow-back'}
          size={30}
          color={'black'}
          style={{position: 'absolute', left: 30}}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: 'black',
              textAlign: 'center',
            }}>
            Reset Password
          </Text>
        </View>
      </Header>

      <View
        style={{
          marginTop: 20,
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        {resetPass ? (
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Manrope-Bold',
              fontSize: 20,
              color: 'green',
            }}>
            Check your email for OTP
          </Text>
        ) : null}
      </View>

      <View style={{marginTop: 50, width: '100%'}}>
        <TextInputController
          headerTitle={'Email'}
          control={control}
          name={'email'}
          placeholder={'your_email@gmail.com'}
          errorMessage={errors?.email?.message}
          errorStyle={{color: 'red'}}
        />
        {resetPass ? (
          <>
            <TextInputController
              headerTitle={'OTP'}
              control={control}
              name={'otp'}
              placeholder={'XXXXXX'}
              errorMessage={errors?.otp?.message}
              errorStyle={{color: 'red'}}
            />
            <TextInputController
              headerTitle={'New password'}
              control={control}
              name={'newPassword'}
              placeholder={'******'}
              errorMessage={errors?.newPassword?.message}
              errorStyle={{color: 'red'}}
              secureTextEntry
            />
          </>
        ) : null}
      </View>
      {!isKeyboardVisible ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 70,
            width: '100%',
            bottom: 50,
            position: 'absolute',
          }}>
          <ButtonComponent
            onPress={handleSubmit(resetPass ? onReset : onForgot)}
            color="#2C74B3"
            size="lg"
            styles={{width: '50%'}}>
            <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
              Reset
            </Text>
          </ButtonComponent>
        </View>
      ) : null}
    </View>
  );
};

export default ForgotPasswordScreen;
