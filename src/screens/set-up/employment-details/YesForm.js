/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';

import TextInputController from '../../../components/input/text-input/TextInputController';
import PickerInputController from '../../../components/input/PickerInput/PickerInputController';

const employmentTypes = [
  'regular-permanent',
  'temporary',
  'casual',
  'contractual',
  'self-employed',
];

const YesForm = ({errors, control}) => {
  return (
    <>
      <View style={{marginBottom: 70}}>
        <View style={{marginTop: 10}}>
          <PickerInputController
            headerTitle={'Employment Type'}
            name={'type'}
            control={control}
            errorMessage={errors?.type?.message}
            errorStyle={{color: 'red', width: '95%', alignSelf: 'center'}}
            pickerOptions={employmentTypes}
            headerStyles={{width: widthPercentageToDP(90)}}
            pickerStyle={{width: widthPercentageToDP(90)}}
          />
        </View>
        <TextInputController
          headerTitle={'Present Occupation'}
          control={control}
          name={'presentOccupation'}
          placeholder={'Present Occupation'}
          errorMessage={errors?.presentOccupation?.message}
          errorStyle={{color: 'red'}}
        />
        <TextInputController
          headerTitle={'Line of Business'}
          control={control}
          name={'lineOfBusiness'}
          placeholder={'Line of Business'}
          errorMessage={errors?.lineOfBusiness?.message}
          errorStyle={{color: 'red'}}
        />
        <TextInputController
          headerTitle={'Profession'}
          control={control}
          name={'profession'}
          placeholder={'Profession'}
          errorMessage={errors?.profession?.message}
          errorStyle={{color: 'red'}}
        />
      </View>
    </>
  );
};

export default YesForm;
