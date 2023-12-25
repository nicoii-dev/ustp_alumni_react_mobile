/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {widthPercentageToDP} from 'react-native-responsive-screen';

import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import TextInputController from '../../../components/input/text-input/TextInputController';
import {EmploymentSchema} from '../../../library/yup-schema/employmentScheme';
import PickerInputController from '../../../components/input/PickerInput/PickerInputController';
import {UpdateEmploymentDetails} from '../../../library/api/employmentApi';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {setNoDetails} from '../../../store/EmploymentDetailsSlice';

const employmentTypes = [
  'regular-permanent',
  'temporary',
  'casual',
  'contractual',
  'self-employed',
];

const YesForm = ({employmentStatus, yesDetails, noDetails}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const defaultValues = {
    type: 'regular-permanent',
    presentOccupation: '',
    lineOfBusiness: '',
    profession: '',
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(EmploymentSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (yesDetails) {
      reset({
        type: yesDetails.type,
        presentOccupation: yesDetails.presentOccupation,
        lineOfBusiness: yesDetails.lineOfBusiness,
        profession: yesDetails.profession,
      });
    }
  }, []);

  const onSubmit = async data => {
    dispatch(loadingStart());
    const payload = {
      status: employmentStatus,
      type: data.type,
      present_occupation: data.presentOccupation,
      line_of_business: data.lineOfBusiness,
      profession: data.profession,
    };

    try {
      const response = await UpdateEmploymentDetails(
        yesDetails.id || noDetails.id,
        payload,
      );
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
          'Employment Details Successfully Added',
          Toast.LONG,
          Toast.CENTER,
        );
        dispatch(setNoDetails([]));
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
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{width: '75%'}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Save</Text>
        </ButtonComponent>
      </View>
    </>
  );
};

export default YesForm;
