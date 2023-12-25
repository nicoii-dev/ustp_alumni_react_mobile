/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {CheckBox} from '@rneui/themed';

import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import {UpdateEmploymentDetails} from '../../../library/api/employmentApi';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {setYesDetails} from '../../../store/EmploymentDetailsSlice';

const NoForm = ({employmentStatus, noDetails, yesDetails}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [stateOfReasons, setStateOfReasons] = React.useState([]);

  useEffect(() => {
    if (!_.isEmpty(noDetails)) {
      // converting string array to actual array
      const convertString = noDetails.state_of_reasons
        .replace(/\[|\]/g, '')
        .split(',');
      setStateOfReasons(convertString);
    }
  }, [noDetails]);

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

  const onSubmit = async () => {
    dispatch(loadingStart());
    const payload = {
      status: employmentStatus,
      state_of_reasons: `[${stateOfReasons}]`,
    };
    try {
      const response = await UpdateEmploymentDetails(
        noDetails.id || yesDetails.id,
        payload,
      );
      console.log(response);
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
          'Employment Details Successfully Added',
          Toast.LONG,
          Toast.CENTER,
        );
        dispatch(setYesDetails([]));
        return navigation.goBack();
      }
      3;
    } catch (error) {
      console.log(error);
      dispatch(loadingFinish());
    }

    dispatch(loadingFinish());
  };
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
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          marginTop: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ButtonComponent
          disabled={error}
          onPress={onSubmit}
          color="#2C74B3"
          size="lg"
          styles={{width: '75%'}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Save</Text>
        </ButtonComponent>
      </View>
    </>
  );
};

export default NoForm;
