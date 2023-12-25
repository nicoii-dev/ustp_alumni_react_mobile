/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../components/input/text-input/TextInputController';
import DateInputController from '../../../components/input/DateInput/DateInputeController';

const EducationalForm = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'College'}
        control={control}
        name={'collegeSchool'}
        placeholder={'College'}
        errorMessage={errors?.collegeSchool?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Address'}
        control={control}
        name={'collegeAddress'}
        placeholder={'Address'}
        errorMessage={errors?.collegeAddress?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Course'}
        control={control}
        name={'course'}
        placeholder={'Course'}
        errorMessage={errors?.course?.message}
        errorStyle={{color: 'red'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Year Start'}
            name={'collegeSyStart'}
            control={control}
            errorMessage={errors?.collegeSyStart?.message}
            display={'default'}
            mode={'date'}
          />
        </View>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Year End'}
            name={'collegeSyEnd'}
            control={control}
            errorMessage={errors?.collegeSyEnd?.message}
            display={'default'}
            mode={'date'}
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
      />
      <TextInputController
        headerTitle={'Address'}
        control={control}
        name={'highAddress'}
        placeholder={'Address'}
        errorMessage={errors?.highAddress?.message}
        errorStyle={{color: 'red'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Year Start'}
            name={'highSyStart'}
            control={control}
            errorMessage={errors?.highSyStart?.message}
            display={'default'}
            mode={'date'}
          />
        </View>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Year Start'}
            name={'highSyEnd'}
            control={control}
            errorMessage={errors?.highSyEnd?.message}
            display={'default'}
            mode={'date'}
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
      />
      <TextInputController
        headerTitle={'Address'}
        control={control}
        name={'elemAddress'}
        placeholder={'Address'}
        errorMessage={errors?.elemAddress?.message}
        errorStyle={{color: 'red'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Year Start'}
            name={'elemSyStart'}
            control={control}
            errorMessage={errors?.elemSyStart?.message}
            display={'default'}
            mode={'date'}
          />
        </View>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Year End'}
            name={'elemSyEnd'}
            control={control}
            errorMessage={errors?.elemSyEnd?.message}
            display={'default'}
            mode={'date'}
          />
        </View>
      </View>
    </>
  );
};

export default EducationalForm;
