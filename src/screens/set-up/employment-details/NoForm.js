/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React from 'react';
import {CheckBox} from '@rneui/themed';

const NoForm = ({stateOfReasons, setStateOfReasons}) => {
  const stateReasonsHandler = event => {
    let reasonsArray = [...stateOfReasons];
    if (!stateOfReasons.includes(event)) {
      reasonsArray.push(event);
    } else {
      const index = reasonsArray.indexOf(event);
      if (index > -1) {
        // only splice array when item is found
        reasonsArray.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    setStateOfReasons(reasonsArray);
  };

  const error = stateOfReasons?.length < 1;

  return (
    <>
      <View style={{marginBottom: 65}}>
        <View style={{}}>
          <Text style={{color: error ? 'red' : 'black'}}>
            Please state reason(s) why you are not yet employed. You may check
            more than one answer.
          </Text>
        </View>
        <View row align="center" spacing={4}>
          <CheckBox
            checked={stateOfReasons?.includes('Advance or further study')}
            onPress={() => stateReasonsHandler('Advance or further study')}
            title="Advance or further study"
          />
          <CheckBox
            checked={stateOfReasons?.includes(
              'Family concern and decided not to find a job',
            )}
            onPress={() =>
              stateReasonsHandler(
                'Family concern and decided not to find a job',
              )
            }
            title="Family concern and decided not to find a job"
          />
          <CheckBox
            checked={stateOfReasons?.includes('Health-related reason(s)')}
            onPress={() => stateReasonsHandler('Health-related reason(s)')}
            title="Health-related reason(s)"
          />
          <CheckBox
            checked={stateOfReasons?.includes('Lack of work experience')}
            onPress={() => stateReasonsHandler('Lack of work experience')}
            title="Lack of work experience"
          />
          <CheckBox
            checked={stateOfReasons?.includes('No job opportunity')}
            onPress={() => stateReasonsHandler('No job opportunity')}
            title="No job opportunity"
          />
          <CheckBox
            checked={stateOfReasons?.includes('Did not look for a job')}
            onPress={() => stateReasonsHandler('Did not look for a job')}
            title="Did not look for a job"
          />
        </View>
      </View>
    </>
  );
};

export default NoForm;
