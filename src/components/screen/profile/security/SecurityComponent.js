/* eslint-disable react/prop-types */
import React from 'react';
import TextInputController from '../../../input/text-input/TextInputController';

const SecurityComponent = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'Current password'}
        control={control}
        name={'currentPassword'}
        placeholder={'Current password'}
        errorMessage={errors?.currentPassword?.message}
        errorStyle={{color: 'red'}}
        secureTextEntry
      />
      <TextInputController
        headerTitle={'New password'}
        control={control}
        name={'newPassword'}
        placeholder={'New password'}
        errorMessage={errors?.newPassword?.message}
        errorStyle={{color: 'red'}}
        secureTextEntry
      />
      <TextInputController
        headerTitle={'Confirm password'}
        control={control}
        name={'confirmPassword'}
        placeholder={'Confirm password'}
        errorMessage={errors?.confirmPassword?.message}
        errorStyle={{color: 'red'}}
        secureTextEntry
      />
    </>
  );
};

export default SecurityComponent;
