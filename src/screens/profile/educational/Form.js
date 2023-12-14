/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../components/input/text-input/TextInputController';

const EducationalForm = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'College'}
        control={control}
        name={'college'}
        placeholder={'College'}
        errorMessage={errors?.college?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <TextInputController
        headerTitle={'Address'}
        control={control}
        name={'address'}
        placeholder={'Address'}
        errorMessage={errors?.address?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <TextInputController
        headerTitle={'Course'}
        control={control}
        name={'course'}
        placeholder={'Course'}
        errorMessage={errors?.course?.message}
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
            headerTitle={'Year Start'}
            control={control}
            name={'yearStart'}
            placeholder={'Year Start'}
            errorMessage={errors?.yearStart?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Year End'}
            control={control}
            name={'yearEnd'}
            placeholder={'Year End'}
            errorMessage={errors?.yearEnd?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
      </View>
      <TextInputController
        headerTitle={'High School'}
        control={control}
        name={'highSchool'}
        placeholder={'High School'}
        errorMessage={errors?.highSchool?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <TextInputController
        headerTitle={'Address'}
        control={control}
        name={'highAddress'}
        placeholder={'Address'}
        errorMessage={errors?.highAddress?.message}
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
            headerTitle={'Year Start'}
            control={control}
            name={'highYearStart'}
            placeholder={'Year Start'}
            errorMessage={errors?.highYearStart?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Year End'}
            control={control}
            name={'highYearEnd'}
            placeholder={'Year End'}
            errorMessage={errors?.highYearEnd?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
      </View>

      <TextInputController
        headerTitle={'Elementary School'}
        control={control}
        name={'elemSchool'}
        placeholder={'Elementary School'}
        errorMessage={errors?.elemSchool?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
      <TextInputController
        headerTitle={'Address'}
        control={control}
        name={'elemAddress'}
        placeholder={'Address'}
        errorMessage={errors?.elemAddress?.message}
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
            headerTitle={'Year Start'}
            control={control}
            name={'elemYearStart'}
            placeholder={'Year Start'}
            errorMessage={errors?.elemYearStart?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Year End'}
            control={control}
            name={'elemYearEnd'}
            placeholder={'Year End'}
            errorMessage={errors?.elemYearEnd?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
      </View>
    </>
  );
};

export default EducationalForm;
