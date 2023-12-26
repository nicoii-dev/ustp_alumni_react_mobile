import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {CheckBox} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';

import ButtonComponent from '../../../components/input/button/ButtonComponent';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import YesForm from './YesForm';
import NoForm from './NoForm';
import {EmploymentSchema} from '../../../library/yup-schema/employmentScheme';
import {setEmploymentDetails} from '../../../store/SetupProfileSlice';

const SetupEmploymentDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [employmentStatus, setEmploymentStatus] = useState('yes');
  const [stateOfReasons, setStateOfReasons] = React.useState([]);
  // const {employmentDetails} = useSelector(state => state.setupProfile);
  // console.log(employmentDetails);

  const defaultValues = {
    type: 'regular-permanent',
    presentOccupation: '',
    lineOfBusiness: '',
    profession: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(EmploymentSchema),
    defaultValues: defaultValues,
  });

  const onYesSubmit = async data => {
    const payload = {
      status: employmentStatus,
      type: data.type,
      present_occupation: data.presentOccupation,
      line_of_business: data.lineOfBusiness,
      profession: data.profession,
    };
    dispatch(setEmploymentDetails(payload));
    navigation.navigate('SetupTrainings');
  };

  const onNoSubmit = async () => {
    const payload = {
      status: employmentStatus,
      state_of_reasons: `[${stateOfReasons}]`,
    };
    dispatch(setEmploymentDetails(payload));
    navigation.navigate('SetupTrainings');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
      }}>
      <Header>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: COLORS.navyBlue,
              textAlign: 'center',
            }}>
            Employment Details
          </Text>
        </View>
      </Header>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
        }}>
        <ScrollView style={{marginTop: 10, width: '100%'}}>
          <View row align="center" spacing={4}>
            <Text>Currently Employed?</Text>
            <CheckBox
              checked={employmentStatus === 'yes'}
              onPress={() => setEmploymentStatus('yes')}
              title="Yes"
            />
            <CheckBox
              checked={employmentStatus === 'no'}
              onPress={() => setEmploymentStatus('no')}
              title="No"
            />
            <CheckBox
              checked={employmentStatus === 'never'}
              onPress={() => setEmploymentStatus('never')}
              title="Never been Employed"
            />
          </View>
          {employmentStatus === 'yes' ? (
            <YesForm errors={errors} control={control} />
          ) : (
            <NoForm
              employmentStatus={employmentStatus}
              stateOfReasons={stateOfReasons}
              setStateOfReasons={setStateOfReasons}
            />
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 1,
          height: 70,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {/* <Pressable onPress={() => navigation.goBack()}>
          <View style={{marginRight: 30, width: 100, marginLeft: 50}}>
            <Text style={{color: 'black', fontFamily: 'Manrope-Bold'}}>
              Back
            </Text>
          </View>
        </Pressable> */}
        <ButtonComponent
          disabled={stateOfReasons.length < 1 && employmentStatus === 'no'}
          onPress={
            employmentStatus === 'yes' ? handleSubmit(onYesSubmit) : onNoSubmit
          }
          color="#2C74B3"
          size="lg"
          styles={{
            marginRight: 30,
            width: 100,
            position: 'absolute',
            right: 0,
          }}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Next</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default SetupEmploymentDetails;
