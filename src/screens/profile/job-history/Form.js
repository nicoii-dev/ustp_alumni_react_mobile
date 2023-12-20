/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../components/input/text-input/TextInputController';
import PickerInputController from '../../../components/input/PickerInput/PickerInputController';
import DateInputController from '../../../components/input/DateInput/DateInputeController';

const jobHistoryType = ['Currently Employed', 'Resigned', 'End of Contract'];

const JobHistoryForm = ({control, errors}) => {
  return (
    <>
      <TextInputController
        headerTitle={'Company'}
        control={control}
        name={'company'}
        placeholder={'Company'}
        errorMessage={errors?.company?.message}
        errorStyle={{color: 'red'}}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <TextInputController
        headerTitle={'Position'}
        control={control}
        name={'position'}
        placeholder={'Position'}
        errorMessage={errors?.position?.message}
        errorStyle={{color: 'red'}}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Date Started'}
            control={control}
            name={'dateStarted'}
            placeholder={'Date Started'}
            errorMessage={errors?.dateStarted?.message}
            errorStyle={{color: 'red'}}
          />
        </View>
        <View style={{width: '45%'}}>
          <DateInputController
            headerTitle={'Date Ended'}
            control={control}
            name={'dateEnded'}
            placeholder={'Date Ended'}
            errorMessage={errors?.dateEnded?.message}
            errorStyle={{color: 'red'}}
          />
        </View>
      </View>
      <TextInputController
        headerTitle={'Salary'}
        control={control}
        name={'salary'}
        placeholder={'Salary'}
        errorMessage={errors?.salary?.message}
        errorStyle={{color: 'red'}}
        keyboardType="numeric"
      />
      <PickerInputController
        headerTitle={'Status'}
        control={control}
        name={'status'}
        errorMessage={errors?.status?.message}
        errorStyle={{color: 'red'}}
        pickerOptions={jobHistoryType}
      />
    </>
  );
};

export default JobHistoryForm;
