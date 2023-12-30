import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

import ButtonComponent from '../../../components/input/button/ButtonComponent';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import AddressComponent from './Form';
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';

import {CreateTraining} from '../../../library/api/trainingsApi';
import {CreateEmploymentDetails} from '../../../library/api/employmentApi';
import {AddProfileAddress} from '../../../library/api/userApi';
import {CreateEducational} from '../../../library/api/educationApi';

const SetupAddress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {personalDetails, employmentDetails, trainings, educational} =
    useSelector(state => state.setupProfile);

  const [regionCode, setRegionCode] = useState('');
  const [provinceCode, setProvinceCode] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [barangayCode, setBarangayCode] = useState('');
  const [regionText, setRegionText] = useState('');
  const [provinceText, setProvinceText] = useState('');
  const [cityText, setCityText] = useState('');
  const [barangayText, setBarangayText] = useState('');

  const AddressSchema = yup
    .object({
      street: yup.string().required('Street is required'),
      zipcode: yup.string().required('Zip Code is required'),
    })
    .required();

  const defaultValues = {
    street: '',
    zipcode: '',
  };

  const {
    control,
    // setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AddressSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async data => {
    dispatch(loadingStart());

    let employmentPayload = {};

    const formData = new FormData();
    formData.append('civil_status', personalDetails.civilStatus);
    formData.append('dob', moment(personalDetails.dob).format('YYYY-MM-DD'));
    formData.append('image', personalDetails.image);
    formData.append('street', data.street);
    formData.append('barangay', barangayText);
    formData.append('barangay_code', barangayCode);
    formData.append('city', cityText);
    formData.append('city_code', cityCode);
    formData.append('province', provinceText);
    formData.append('province_code', provinceCode);
    formData.append('region', regionText);
    formData.append('region_code', regionCode);
    formData.append('zipcode', data.zipcode);

    if (employmentDetails.status === 'yes') {
      employmentPayload = {
        status: employmentDetails.status,
        type: employmentDetails.type,
        present_occupation: employmentDetails.present_occupation,
        line_of_business: employmentDetails.line_of_business,
        profession: employmentDetails.profession,
      };
    } else {
      employmentPayload = {
        status: employmentDetails.status,
        state_of_reasons: `[${employmentDetails.state_of_reasons}]`,
      };
    }
    const trainingPayload = {
      data: [trainings],
    };

    const educationPayload = {
      college: educational.collegeSchool,
      college_address: educational.collegeAddress,
      course: educational.course,
      college_sy: `[${moment(educational.collegeSyStart).format(
        'YYYY',
      )}, ${moment(educational.collegeSyEnd).format('YYYY')}]`,
      high_school: educational.highSchool,
      high_address: educational.highAddress,
      high_sy: `[${moment(educational.highSyStart).format('YYYY')}, ${moment(
        educational.highSyEnd,
      ).format('YYYY')}]`,
      elem_school: educational.elemSchool,
      elem_address: educational.elemAddress,
      elem_sy: `[${moment(educational.elemSyStart).format('YYYY')}, ${moment(
        educational.elemSyEnd,
      ).format('YYYY')}]`,
    };

    try {
      await CreateEducational(educationPayload);
      await AddProfileAddress(formData);
      await CreateEmploymentDetails(employmentPayload);
      await CreateTraining(trainingPayload);
      Toast.showWithGravity(
        'Information successfully saved',
        Toast.LONG,
        Toast.CENTER,
      );
      dispatch(loadingFinish());
      navigation.navigate('UserTab');
    } catch (error) {
      console.log(error);
      Toast.showWithGravity('Something went wrong.', Toast.LONG, Toast.CENTER);
      dispatch(loadingFinish());
    }
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
            Address
          </Text>
        </View>
      </Header>
      <ScrollView style={{flex: 1, marginTop: 10, width: '90%'}}>
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
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Save</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default SetupAddress;
