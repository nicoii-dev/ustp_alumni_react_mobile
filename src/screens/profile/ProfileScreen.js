/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import UstpImages from '../../config/images/ustp-images';
import COLORS from '../../config/constants/colors';

// components
import Header from '../../components/header/Header';
import ButtonComponent from '../../components/input/button/ButtonComponent';
// styles
import ProfileScreenStyle from './profile-screen-styles';
import LogoutOverlay from '../../components/screen/profile/Logout';
import { useStorage } from '../../library/storage/Storage';
import { USER } from '../../library/constants';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState(null);

  const getUser = useCallback(async () => {
    const data = await useStorage.getItem(USER.USER_DATA)
    setUser(JSON.parse(data))
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])
  console.log(user)
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header />
      <View style={{width: '100%', marginTop: 30}}>
        <View style={{alignItems: 'center'}}>
          <FastImage
            source={user?.image ? {uri:`http://localhost:8000/storage/${user.image}`} : UstpImages.ustpLogo}
            style={{
              height: 100,
              width: 100,
              borderRadius: 200,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 18,
              color: COLORS.navyBlue,
              textTransform: 'capitalize'
            }}>
            {`${user?.first_name} ${user?.last_name}`}
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 14,
              color: COLORS.navyBlue,
            }}>
              {user?.email}
          </Text>
        </View>
        <View style={ProfileScreenStyle.accountSettingsContainer}>
          <Text style={ProfileScreenStyle.accountSettingsText}>
            Account Settings
          </Text>
        </View>
        <View style={{width: '70%', alignSelf: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalInfoScreen')}>
            <View style={ProfileScreenStyle.personalContainer}>
              <Text style={ProfileScreenStyle.personalText}>
                Personal Information
              </Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SecurityScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Security</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EducationalScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Educational Background</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AchievementsScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Achievements</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TrainingsStack')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Trainings</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EmploymentDetailsScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Employment Details</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('JobHistoryScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>Job History</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={COLORS.navyBlue}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 20, width: '50%'}}>
        <ButtonComponent
          onPress={() => {
            setIsVisible(true);
          }}
          color={COLORS.DARK_BLUE}
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Logout
          </Text>
        </ButtonComponent>
      </View>

      <LogoutOverlay
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title={'Are you sure you want to Logout?'}
      />
    </View>
  );
};

export default ProfileScreen;
