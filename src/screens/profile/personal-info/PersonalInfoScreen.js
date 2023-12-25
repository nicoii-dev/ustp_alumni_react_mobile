/* eslint-disable no-unused-vars */
import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

// components
import Header from '../../../components/header/Header';
import PersonalInfoComponent from '../../../components/screen/profile/personal-info/PersonalInfoComponent';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {profileSchema} from '../../../library/yup-schema/profileSchema';
import {USER} from '../../../library/constants';
import {useStorage} from '../../../library/storage/Storage';
import moment from 'moment';

// api
import {UpdateProfile} from '../../../library/api/userApi';

// redux
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import COLORS from '../../../config/constants/colors';

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');

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
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: defaultValues,
  });

  const getUserDetails = useCallback(async () => {
    const user = await useStorage.getItem(USER.USER_DATA);
    if (user) {
      const {
        id,
        first_name = '',
        middle_name = '',
        last_name = '',
        gender = '',
        dob = new Date(),
        email = '',
        phone_number = '',
      } = JSON.parse(user);
      setUserId(id);
      reset({
        firstName: first_name,
        middleName: middle_name,
        lastName: last_name,
        gender,
        dob: new Date(),
        email,
        phoneNumber: phone_number,
      });
    }
  }, [reset]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const onSubmit = async data => {
    dispatch(loadingStart());
    const payload = {
      first_name: data.firstName,
      middle_name: data.middleName,
      last_name: data.lastName,
      gender: data.gender,
      phone_number: data.phoneNumber,
      dob: moment(data.dob).format('YYYY-MM-DD'),
      role: 'USER',
      status: 1,
    };
    await UpdateProfile(payload, userId);
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
            {`Personal \nInformation`}
          </Text>
        </View>
      </Header>
      <View style={{marginTop: 10, width: '100%'}}>
        <PersonalInfoComponent control={control} errors={errors} />
      </View>

      {/* <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '100%',
          bottom: 10,
          position: 'absolute',
        }}>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{width: '50%'}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Update
          </Text>
        </ButtonComponent>
      </View> */}
    </View>
  );
};

export default PersonalInfoScreen;
