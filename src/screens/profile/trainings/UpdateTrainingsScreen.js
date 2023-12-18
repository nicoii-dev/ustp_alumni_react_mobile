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
import {TrainingSchema} from '../../../library/yup-schema/trainingsSchema';
import {FetchTraining, UpdateTraining} from '../../../library/api/trainingsApi';
import TrainingsForm from './Form';
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import ButtonComponent from '../../../components/input/button/ButtonComponent';

const UpdateTrainingsScreen = ({route}) => {
  const navigation = useNavigation();
  const {trainingId} = route.params;
  const dispatch = useDispatch();
  const defaultValues = {
    title: '',
    topic: '',
    date: new Date(),
    duration: '',
    institution: '',
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(TrainingSchema),
    defaultValues: defaultValues,
  });

  const getTraining = useCallback(async () => {
    await FetchTraining(trainingId)
      .then(async response => {
        console.log(response);
        reset({
          title: response.title,
          topic: response.topic,
          date: response.date,
          duration: response.duration,
          institution: response.institution,
        });
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, [reset]);

  useEffect(() => {
    getTraining();
  }, [getTraining]);

  const onSubmit = async data => {
    dispatch(loadingStart());
    const payload = {
      data: [
        {
          title: data.title,
          topic: data.topic,
          date: data.date,
          duration: data.duration,
          institution: data.institution,
        },
      ],
    };
    try {
      const response = await UpdateTraining(payload, trainingId);
      console.log(response);
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
          'Training successfully updated.',
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
            Trainings
          </Text>
        </View>
      </Header>
      <ScrollView style={{marginTop: 10, width: '100%'}}>
        <TrainingsForm control={control} errors={errors} />
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
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Update</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default UpdateTrainingsScreen;
