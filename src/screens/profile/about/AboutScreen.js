/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from '../../../components/header/HeaderComponent';
import PersonalInfoComponent from '../../../components/screens/profile/personal-info/PersonalInfoComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import {profileSchema} from '../../../library/yup-schema/profileSchema';
import SecurityComponent from '../../../components/screens/profile/security/SecurityComponent';

const AboutScreen = () => {
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
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
      }}>
      <HeaderComponent>
        <Icon
          name={'arrow-back'}
          size={30}
          color={'white'}
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
              color: 'white',
              textAlign: 'center',
            }}>
            About
          </Text>
        </View>
      </HeaderComponent>
      <View>
        <Text>wewqeqwe</Text>
      </View>
    </View>
  );
};

export default AboutScreen;
