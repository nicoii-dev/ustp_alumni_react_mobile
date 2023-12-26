/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../input/text-input/TextInputController';
import PickerInputController from '../../../input/PickerInput/PickerInputController';
import DateInputController from '../../../input/DateInput/DateInputeController';
const civilStatusList = [
  'single',
  'married',
  'divorced',
  'separated',
  'widowed',
  'single-parent',
];

const PersonalInfoComponent = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'First name'}
        control={control}
        name={'firstName'}
        placeholder={'First name'}
        errorMessage={errors?.firstName?.message}
        errorStyle={{color: 'red'}}
        editable={false}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <TextInputController
        headerTitle={'Middle name'}
        control={control}
        name={'middleName'}
        placeholder={'Middle name'}
        errorMessage={errors?.middleName?.message}
        errorStyle={{color: 'red'}}
        editable={false}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <TextInputController
        headerTitle={'Last name'}
        control={control}
        name={'lastName'}
        placeholder={'Last name'}
        errorMessage={errors?.lastName?.message}
        errorStyle={{color: 'red'}}
        editable={false}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <View>
        <PickerInputController
          headerTitle={'Gender'}
          name={'gender'}
          control={control}
          errorMessage={errors?.gender?.message}
          errorStyle={{color: 'red', width: '95%', alignSelf: 'center'}}
          pickerOptions={['Male', 'Female']}
          headerStyles={{width: '95%'}}
        />
      </View>
      <View>
        <PickerInputController
          headerTitle={'Civil Status'}
          name={'civilStatus'}
          control={control}
          errorMessage={errors?.civilStatus?.message}
          errorStyle={{color: 'red', width: '95%', alignSelf: 'center'}}
          pickerOptions={civilStatusList}
          headerStyles={{width: '95%'}}
        />
      </View>
      <TextInputController
        headerTitle={'Phone number'}
        control={control}
        name={'phoneNumber'}
        placeholder={'Phone number'}
        errorMessage={errors?.phoneNumber?.message}
        errorStyle={{color: 'red'}}
        keyboardType={'numeric'}
      />
      <View>
        <DateInputController
          headerTitle={'Date of birth'}
          name={'dob'}
          control={control}
          errorMessage={errors?.dob?.message}
          display={'default'}
          mode={'date'}
        />
      </View>
    </>
  );
};

export default PersonalInfoComponent;
