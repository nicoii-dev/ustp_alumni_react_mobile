/* eslint-disable react/prop-types */
import {View} from 'react-native';
import React from 'react';
import TextInputController from '../../../components/input/text-input/TextInputController';

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
        editable={false}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <TextInputController
        headerTitle={'Position'}
        control={control}
        name={'position'}
        placeholder={'Position'}
        errorMessage={errors?.position?.message}
        errorStyle={{color: 'red'}}
        editable={false}
        inputStyle={{textTransform: 'capitalize'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Date Started'}
            control={control}
            name={'dateStarted'}
            placeholder={'Date Started'}
            errorMessage={errors?.dateStarted?.message}
            errorStyle={{color: 'red'}}
            editable={false}
          />
        </View>
        <View style={{width: '45%'}}>
          <TextInputController
            headerTitle={'Date Ended'}
            control={control}
            name={'dateEnded'}
            placeholder={'Date Ended'}
            errorMessage={errors?.dateEnded?.message}
            errorStyle={{color: 'red'}}
            editable={false}
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
        editable={false}
      />
      <TextInputController
        headerTitle={'Status'}
        control={control}
        name={'status'}
        placeholder={'Status'}
        errorMessage={errors?.status?.message}
        errorStyle={{color: 'red'}}
        editable={false}
      />
    </>
  );
};

export default JobHistoryForm;
