/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import EmploymentItem from './item';
import {FetchAllEmploymentDetails} from '../../../library/api/employmentApi';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import {
  setNoDetails,
  setYesDetails,
} from '../../../store/EmploymentDetailsSlice';

const EmploymentDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [employment, setEmployment] = useState([]);

  const getEmploymentDetails = useCallback(async () => {
    await FetchAllEmploymentDetails()
      .then(async response => {
        setEmployment(response);
        if (
          !_.isEmpty(response) ||
          !_.isNull(response) ||
          !_.isUndefined(response)
        ) {
          if (response.status === 'yes') {
            dispatch(
              setYesDetails({
                id: response.id,
                status: response.status,
                type: response.type,
                presentOccupation: response.present_occupation,
                lineOfBusiness: response.line_of_business,
                profession: response.profession,
              }),
            );
          } else {
            dispatch(
              setNoDetails({
                id: response.id,
                status: response.status,
                state_of_reasons: response.state_of_reasons,
              }),
            );
          }
          return;
        }
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getEmploymentDetails();
    });
  }, [getEmploymentDetails, navigation]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getEmploymentDetails();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
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
        <Icon
          name={'edit'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', right: 30}}
          onPress={() => navigation.navigate('UpdateEmploymentScreen')}
        />
      </Header>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <EmploymentItem employment={employment} />
      </ScrollView>
    </View>
  );
};

export default EmploymentDetailsScreen;
