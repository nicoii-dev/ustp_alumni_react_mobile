/* eslint-disable no-unused-vars */
import {View, Text, ScrollView, RefreshControl} from 'react-native';
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
import {FetchProfile, UpdateProfile} from '../../../library/api/userApi';

// redux
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';
import COLORS from '../../../config/constants/colors';
import AddressComponent from './Address';

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState([]);

  const [regionCode, setRegionCode] = useState('');
  const [provinceCode, setProvinceCode] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [barangayCode, setBarangayCode] = useState('');
  const [regionText, setRegionText] = useState('');
  const [provinceText, setProvinceText] = useState('');
  const [cityText, setCityText] = useState('');
  const [barangayText, setBarangayText] = useState('');

  const getProfileData = useCallback(async () => {
    await FetchProfile()
      .then(async response => {
        setProfileData(response);
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getProfileData();
    });
  }, [getProfileData, navigation]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProfileData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const defaultValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    gender: 'Male',
    phoneNumber: '',
    dob: new Date(),
    civilStatus: 'single',
    street: '',
    zipcode: '',
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
    console.log('prof', profileData);
    if (profileData) {
      reset({
        firstName: profileData.first_name,
        middleName: profileData.middle_name,
        lastName: profileData.last_name,
        gender: profileData.gender,
        dob: profileData.dob,
        phoneNumber: profileData.phone_number,
        civilStatus: profileData.civil_status,
      });
    }
  }, [reset, profileData]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const onSubmit = async data => {
    dispatch(loadingStart());
    const payload = {
      gender: data.gender,
      civil_status: data.civilStatus,
      phone_number: data.phoneNumber,
      dob: moment(data.dob).format('YYYY-MM-DD'),
      street: data.street,
      zipcode: data.zipcode,
      barangay: barangayText,
      barangay_code: barangayCode,
      city: cityText,
      city_code: cityCode,
      province: provinceText,
      province_code: provinceCode,
      region: regionText,
      region_code: regionCode,
    };
    console.log(payload);
    await UpdateProfile(payload);
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
      <ScrollView
        style={{flex: 1}}
        // contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <PersonalInfoComponent control={control} errors={errors} />
        <AddressComponent
          control={control}
          errors={errors}
          setBarangayCode={setBarangayCode}
          setCityCode={setCityCode}
          setProvinceCode={setProvinceCode}
          setRegionCode={setRegionCode}
          setBarangayText={setBarangayText}
          setCityText={setCityText}
          setProvinceText={setProvinceText}
          setRegionText={setRegionText}
          regionCode={regionCode}
          provinceCode={provinceCode}
          cityCode={cityCode}
          barangayCode={barangayCode}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 70,
            width: '100%',
            bottom: 10,
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
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInfoScreen;
