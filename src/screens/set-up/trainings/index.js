import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';

import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {TrainingSchema} from '../../../library/yup-schema/trainingsSchema';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import TextInputController from '../../../components/input/text-input/TextInputController';
import DateInputController from '../../../components/input/DateInput/DateInputeController';
import {setTrainings} from '../../../store/SetupProfileSlice';

const SetupTrainings = () => {
  const navigation = useNavigation();
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
    // setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(TrainingSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async data => {
    dispatch(setTrainings(data));
    navigation.navigate('SetupEducational');
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
            Trainings
          </Text>
        </View>
      </Header>
      <ScrollView style={{marginTop: 10, width: '90%'}}>
        <TextInputController
          headerTitle={'Title'}
          control={control}
          name={'title'}
          placeholder={'Title'}
          errorMessage={errors?.title?.message}
          errorStyle={{color: 'red'}}
        />
        <TextInputController
          headerTitle={'Topic'}
          control={control}
          name={'topic'}
          placeholder={'Topic'}
          errorMessage={errors?.topic?.message}
          errorStyle={{color: 'red'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <View style={{width: '45%'}}>
            <DateInputController
              headerTitle={'Date'}
              control={control}
              name={'date'}
              placeholder={'Date'}
              errorMessage={errors?.date?.message}
              errorStyle={{color: 'red'}}
            />
          </View>
          <View style={{width: '45%'}}>
            <TextInputController
              headerTitle={'Duration(hours)'}
              control={control}
              name={'duration'}
              placeholder={'Duration'}
              errorMessage={errors?.duration?.message}
              errorStyle={{color: 'red'}}
              keyboardType="numeric"
            />
          </View>
        </View>
        <TextInputController
          headerTitle={'Institution'}
          control={control}
          name={'institution'}
          placeholder={'Institution'}
          errorMessage={errors?.institution?.message}
          errorStyle={{color: 'red'}}
        />
      </ScrollView>
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
          onPress={handleSubmit(onSubmit)}
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

export default SetupTrainings;
