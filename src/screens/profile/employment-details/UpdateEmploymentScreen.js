/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CheckBox} from '@rneui/themed';
import {useSelector} from 'react-redux';
import _ from 'lodash'

import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import NoForm from './NoForm';
import YesForm from './YesForm';

const UpdateEmploymentScreen = () => {
  const navigation = useNavigation();
  const [employmentStatus, setEmploymentStatus] = React.useState('yes');
  const {yesDetails} = useSelector(state => state.employmentDetails);
  const {noDetails} = useSelector(state => state.employmentDetails);

  useEffect(() => {
    setEmploymentStatus(!_.isEmpty(yesDetails) ? 'yes' : 'no');
  }, []);

  console.log(yesDetails);

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
            Update Details
          </Text>
        </View>
      </Header>
      <ScrollView style={{marginTop: 10, width: '100%'}}>
        <View row align="center" spacing={4}>
          <Text>Currently Employed?</Text>
          <CheckBox
            checked={employmentStatus === 'yes'}
            onPress={() => setEmploymentStatus('yes')}
            title="Yes"
          />
          <CheckBox
            checked={employmentStatus === 'no'}
            onPress={() => setEmploymentStatus('no')}
            title="No"
          />
          <CheckBox
            checked={employmentStatus === 'never'}
            onPress={() => setEmploymentStatus('never')}
            title="Never been Employed"
          />
        </View>
        {employmentStatus === 'yes' ? (
          <YesForm
            employmentStatus={employmentStatus}
            yesDetails={yesDetails}
            noDetails={noDetails}
          />
        ) : (
          <NoForm employmentStatus={employmentStatus} noDetails={noDetails} yesDetails={yesDetails} />
        )}
      </ScrollView>
    </View>
  );
};

export default UpdateEmploymentScreen;
