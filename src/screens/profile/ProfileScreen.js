/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
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

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header height={300}>
        <View style={{alignItems: 'center'}}>
          <FastImage
            source={UstpImages.ustpLogo}
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
              color: 'white',
            }}>
            Traffic Enforcer
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 14,
              color: 'white',
            }}>
            trafficenforcer@gmail.com
          </Text>
        </View>
      </Header>
      <View style={{width: '100%'}}>
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
                color={'black'}
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
                color={'black'}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
            <View style={ProfileScreenStyle.securityContainer}>
              <Text style={ProfileScreenStyle.securityText}>About</Text>
              <Icon
                name={'arrow-forward-ios'}
                size={20}
                color={'black'}
                style={ProfileScreenStyle.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 20, width: '50%'}}>
        <ButtonComponent
          onPress={() => {setIsVisible(true)}}
          color={COLORS.DARK_BLUE}
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Logout
          </Text>
        </ButtonComponent>
      </View>

      <LogoutOverlay isVisible={isVisible} setIsVisible={setIsVisible} title={'Are you sure you want to Logout?'} />
    </View>
  );
};

export default ProfileScreen;
