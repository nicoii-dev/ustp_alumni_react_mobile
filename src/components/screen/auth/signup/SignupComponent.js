/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
// components
import PickerInputController from '../../../input/PickerInput/PickerInputController';
import TextInputController from '../../../input/text-input/TextInputController';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const SignupComponent = ({control, errors}) => {
  return (
    <>
      <TextInputController
        control={control}
        name={'firstName'}
        placeholder={'First Name'}
        errorMessage={errors.firstName?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'middleName'}
        placeholder={'Middle Name'}
        errorMessage={errors.middleName?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'lastName'}
        placeholder={'Last Name'}
        errorMessage={errors.lastName?.message}
        errorStyle={{color: 'red'}}
      />

      <View>
        <PickerInputController
          headerTitle={'Gender'}
          name={'gender'}
          control={control}
          errorMessage={errors?.gender?.message}
          errorStyle={{color: 'red', width: '95%', alignSelf: 'center'}}
          pickerOptions={['Male', 'Female']}
          headerStyles={{width: widthPercentageToDP(65)}}
          pickerStyle={{width: widthPercentageToDP(68)}}
        />
      </View>
      <TextInputController
        control={control}
        name={'phoneNumber'}
        placeholder={'Phone Number'}
        errorMessage={errors.phoneNumber?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'email'}
        placeholder={'Email'}
        errorMessage={errors.email?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'password'}
        placeholder={'Password'}
        secureTextEntry={true}
        errorMessage={errors.password?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        control={control}
        name={'confirmPassword'}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        errorMessage={errors.confirmPassword?.message}
        errorStyle={{color: 'red'}}
      />
    </>
  );
};

export default SignupComponent;
