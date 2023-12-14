/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../components/input/text-input/TextInputController';

const TrainingsForm = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'Title'}
        control={control}
        name={'title'}
        placeholder={'Title'}
        errorMessage={errors?.title?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <TextInputController
        headerTitle={'Topic'}
        control={control}
        name={'topic'}
        placeholder={'Topic'}
        errorMessage={errors?.topic?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Date'}
            control={control}
            name={'date'}
            placeholder={'Date'}
            errorMessage={errors?.date?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Duration(hours)'}
            control={control}
            name={'duration'}
            placeholder={'Duration'}
            errorMessage={errors?.duration?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
      </View>
      <TextInputController
        headerTitle={'Institution'}
        control={control}
        name={'institution'}
        placeholder={'Institution'}
        errorMessage={errors?.institution?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
    </>
  );
};

export default TrainingsForm;
