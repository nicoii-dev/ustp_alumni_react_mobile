/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../components/input/text-input/TextInputController';
import DateInputController from '../../../components/input/DateInput/DateInputeController';

const AchievementForm = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'Title'}
        control={control}
        name={'title'}
        placeholder={'Title'}
        errorMessage={errors?.title?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Category'}
        control={control}
        name={'category'}
        placeholder={'Category'}
        errorMessage={errors?.category?.message}
        errorStyle={{color: 'red'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '100%'}}>
          <DateInputController
            headerTitle={'Date'}
            control={control}
            name={'date'}
            placeholder={'Date'}
            errorMessage={errors?.date?.message}
            errorStyle={{color: 'red'}}
          />
        </View>
      </View>
      <TextInputController
        headerTitle={'Description'}
        control={control}
        name={'description'}
        placeholder={'Description'}
        errorMessage={errors?.description?.message}
        errorStyle={{color: 'red'}}
      />
    </>
  );
};

export default AchievementForm;
