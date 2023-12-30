import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';

import ButtonComponent from '../../../components/input/button/ButtonComponent';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import {setEducational} from '../../../store/SetupProfileSlice';
import {EducationSchema} from '../../../library/yup-schema/educationalSchema';
import EducationalForm from './Form';

const SetupEducational = () => {
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
  } = useForm({
    resolver: yupResolver(EducationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async data => {
    dispatch(setEducational(data));
    navigation.navigate('SetupAddress');
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
            Educational Background
          </Text>
        </View>
      </Header>
      <ScrollView
        style={{
          marginTop: 10,
          width: '90%',
        }}>
        <EducationalForm control={control} errors={errors} />
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

export default SetupEducational;
