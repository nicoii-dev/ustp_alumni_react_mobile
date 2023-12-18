/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import EmploymentItem from './item';
import {FetchAllEmploymentDetails} from '../../../library/api/employmentApi';

const EmploymentDetailsScreen = () => {
  const navigation = useNavigation();
  const [employment, setEmployment] = useState(null);

  const getTrainings = useCallback(async () => {
    await FetchAllEmploymentDetails()
      .then(async response => {
        console.log(response);
        setEmployment(response);
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getTrainings();
    });
  }, [getTrainings, navigation]);

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
            Employment Details
          </Text>
        </View>
        {/* <Icon
          name={'add'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', right: 30}}
          onPress={() => navigation.navigate('AddTrainingsScreen')}
        /> */}
      </Header>
      <EmploymentItem employment={employment} />
    </View>
  );
};

export default EmploymentDetailsScreen;
