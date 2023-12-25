/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import _ from 'lodash';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import EducationalForm from './Form';
import {EducationSchema} from '../../../library/yup-schema/educationalSchema';
import {FetchEducation} from '../../../library/api/educationApi';
import {useDispatch} from 'react-redux';
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import {CreateEducational} from '../../../library/api/educationApi';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const EducationalScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const defaultValues = {
    collegeSchool: '',
    collegeAddress: '',
    course: '',
    collegeSyStart: new Date(),
    collegeSyEnd: new Date(),
    highSchool: '',
    highAddress: '',
    highSyStart: new Date(),
    highSyEnd: new Date(),
    elemSchool: '',
    elemAddress: '',
    elemSyStart: new Date(),
    elemSyEnd: new Date(),
  };

  const {
    control,
    // setValue,
    handleSubmit,
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
        if(!_.isEmpty(response))
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
          elemYearEnd: String(JSON.parse(response[0].elem_sy)[1]),
        });
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, [reset]);

  useEffect(() => {
    getEducationalBackground();
  }, [getEducationalBackground]);

  const onSubmit = async data => {
    dispatch(loadingStart());
    const educationPayload = {
      college: data.collegeSchool,
      college_address: data.collegeAddress,
      course: data.course,
      college_sy: `[${moment(data.collegeSyStart).format('YYYY')}, ${moment(
        data.collegeSyEnd,
      ).format('YYYY')}]`,
      high_school: data.highSchool,
      high_address: data.highAddress,
      high_sy: `[${moment(data.highSyStart).format('YYYY')}, ${moment(
        data.highSyEnd,
      ).format('YYYY')}]`,
      elem_school: data.elemSchool,
      elem_address: data.elemAddress,
      elem_sy: `[${moment(data.elemSyStart).format('YYYY')}, ${moment(
        data.elemSyEnd,
      ).format('YYYY')}]`,
    };
    try {
      const response = await CreateEducational(educationPayload);
      console.log(response)
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
          'Educational Background successfully updated.',
          Toast.LONG,
          Toast.CENTER,
        );
      }
      dispatch(loadingFinish());
    } catch (error) {
      dispatch(loadingFinish());
    }
  };

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
      <ScrollView style={{marginTop: 10, width: '100%', marginBottom: heightPercentageToDP(10)}}>
        <EducationalForm control={control} errors={errors} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 10,
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
    </View>
  );
};

export default EducationalScreen;
