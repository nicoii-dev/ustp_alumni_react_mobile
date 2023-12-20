/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import AchievementForm from './Form';
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {JobHistorySchema} from '../../../library/yup-schema/jobHistorySchema';
import {
  FetchJobHistory,
  UpdateJobHistory,
} from '../../../library/api/jobHistoryApi';

const UpdateJobHistoryScreen = ({route}) => {
  const navigation = useNavigation();
  const {jobId} = route.params;
  const dispatch = useDispatch();
  const defaultValues = {
    company: '',
    position: '',
    dateStarted: new Date(),
    dateEnded: new Date(),
    salary: '',
    status: 'Currently Employed',
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(JobHistorySchema),
    defaultValues: defaultValues,
  });

  const getData = useCallback(async () => {
    console.log(jobId)
    await FetchJobHistory(jobId)
      .then(async response => {
        console.log(response);
        reset({
          company: response.company,
          position: response.position,
          dateStarted: response.date_started,
          dateEnded: response.date_ended,
          salary: response.salary,
          status: response.status,
        });
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, [reset]);

  useEffect(() => {
    getData();
  }, [getData]);

  const onSubmit = async data => {
    dispatch(loadingStart());
    const payload = {
      company: data.company,
      position: data.position,
      date_started: data.dateStarted,
      date_ended: data.dateEnded,
      salary: data.salary,
      status: data.status,
    };
    console.log(payload)
    try {
      const response = await UpdateJobHistory(payload, jobId);
      console.log(response);
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
          'Job history successfully updated.',
          Toast.LONG,
          Toast.CENTER,
        );
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
            Update
          </Text>
        </View>
      </Header>
      <ScrollView style={{marginTop: 10, width: '100%'}}>
        <AchievementForm control={control} errors={errors} />
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
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Update
          </Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default UpdateJobHistoryScreen;
