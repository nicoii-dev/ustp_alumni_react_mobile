import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';

import COLORS from '../../config/constants/colors';
import UstpImages from '../../config/images/ustp-images';

const Header = () => {
  return (
    <View
      style={{
        width: wp('100%'),
        height: hp(10),
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: wp(5),
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Roboto-BlackItalic',
              fontSize: 25,
              color: COLORS.navyBlue,
            }}>
            USTP Alumnus
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: wp(2)}}>
          <Icon name={'search'} size={25} color={COLORS.navyBlue} />
          <Icon name={'notifications-none'} size={25} color={COLORS.navyBlue} />
          {/* <TouchableOpacity>
            <FastImage
              // @ts-ignore
              source={UstpImages.ustpLogo}
              style={{
                height: hp(4),
                width: hp(4),
                borderRadius: 100,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Header;
