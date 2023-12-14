/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import EducationalForm from './Form';
import {EducationSchema} from '../../../library/yup-schema/educationalSchema';
import {FetchEducation} from '../../../library/api/educationApi';

const EducationalScreen = () => {
  const navigation = useNavigation();

  const defaultValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    gender: 'Male',
    phoneNumber: '',
    dob: new Date(),
  };

  const {
    control,
    // setValue,
    // handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(EducationSchema),
    defaultValues: defaultValues,
  });

  const getEducationalBackground = useCallback(async () => {
    await FetchEducation()
      .then(async response => {
        console.log(response);
          reset({
            college: response[0].college,
            address: response[0].college_address,
            course: response[0].course,
            yearStart: String(JSON.parse(response[0].college_sy)[0]),
            yearEnd: String(JSON.parse(response[0].college_sy)[1]),
            highSchool: response[0].high_school,
            highAddress: response[0].high_address,
            highYearStart: String(JSON.parse(response[0].high_sy)[0]),
            highYearEnd: String(JSON.parse(response[0].high_sy)[1]),
            elemSchool: response[0].elem_school,
            elemAddress: response[0].elem_address,
            elemYearStart: String(JSON.parse(response[0].elem_sy)[0]),
            elemYearEnd: String(JSON.parse(response[0].elem_sy)[1])
          });
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, [reset]);

  useEffect(() => {
    getEducationalBackground();
  }, [getEducationalBackground]);

  //   const onSubmit = async data => {
  //     dispatch(loadingStart());
  //     const payload = {
  //       first_name: data.firstName,
  //       middle_name: data.middleName,
  //       last_name: data.lastName,
  //       gender: data.gender,
  //       phone_number: data.phoneNumber,
  //       dob: moment(data.dob).format('YYYY-MM-DD'),
  //       role: 'USER',
  //       status: 1,
  //     };
  //     await UpdateProfile(payload, userId);
  //     dispatch(loadingFinish());
  //   };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
      }}>
      <Header>
        <Icon
          name={'arrow-back'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', left: 30}}
          onPress={() => navigation.goBack()}
        />
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
            Educational Background
          </Text>
        </View>
      </Header>
      <ScrollView style={{marginTop: 10, width: '100%'}}>
        <EducationalForm control={control} errors={errors} />
      </ScrollView>
    </View>
  );
};

export default EducationalScreen;
