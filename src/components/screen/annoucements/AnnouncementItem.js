import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import COLORS from '../../../config/constants/colors';

const AnnouncementItem = ({id, image, description}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        width: wp('90%'),
        height: hp('35%'),
        marginBottom: 15,
        position: 'relative',
        backgroundColor: COLORS.white,
      }}>
      {/* <Card.Title>HELLO WORLD</Card.Title>
      <Card.Divider /> */}
      <FastImage
        // @ts-ignore
        source={image}
        style={{
          height: '50%',
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        resizeMode="stretch"
      />
      <View style={{marginTop: 5}}>
        <Text
          style={{
            marginBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            fontFamily: 'Roboto-Regular',
            color: COLORS.black,
          }}
          numberOfLines={4}>
          {description}
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 2, alignSelf: 'center'}}>
        <TouchableOpacity
          style={{
            width: wp(50),
            height: hp(4),
            backgroundColor: COLORS.blue,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            bottom: hp(1),
          }}>
          <Text style={{color: COLORS.white, fontFamily: 'Roboto-Bold'}}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnnouncementItem;
