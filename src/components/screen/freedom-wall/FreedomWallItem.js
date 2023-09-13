import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components
import COLORS from '../../../config/constants/colors';
import UstpImages from '../../../config/images/ustp-images';

const FreedomWallItem = ({id, image, description, user}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        width: wp('90%'),
        height: hp('50%'),
        marginBottom: 15,
        position: 'relative',
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{alignItems: 'flex-start', padding: 10, flexDirection: 'row'}}>
        <FastImage
          // @ts-ignore
          source={image ? image : UstpImages.ustpLogo}
          style={{
            height: hp(5),
            width: hp(5),
            borderRadius: 5,
          }}
          resizeMode="stretch"
        />
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Roboto-Bold',
              fontSize: 13,
            }}>
            {user}
          </Text>
          <Text
            style={{
              color: COLORS.dimGray,
              fontFamily: 'Roboto-Regular',
              fontSize: 10,
            }}>
            September 12, 2023 at 2:04 PM
          </Text>
        </View>
      </View>
      {image ? (
        <>
          <FastImage
            // @ts-ignore
            source={image}
            style={{
              height: '45%',
              width: '100%',
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
              numberOfLines={5}>
              {description}
            </Text>
          </View>
        </>
      ) : (
        <View
          style={{
            backgroundColor: COLORS.black,
            height: hp('30%'),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              padding: 10,
              fontFamily: 'Roboto-Bold',
              color: COLORS.white,
              textAlign: 'center',
              fontSize: hp(3),
            }}
            numberOfLines={5}>
            {description}
          </Text>
        </View>
      )}

      <View
        style={{
          position: 'absolute',
          bottom: hp(1),
          width: '100%',
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            width: '95%',
            alignSelf: 'center',
            borderColor: COLORS.gray,
            marginBottom: hp(1),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: wp(25),
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}>
            <Icon name={'thumb-up-off-alt'} size={25} color={COLORS.dimGray} />
            <Text style={{fontFamily: 'Roboto-Bold', color: COLORS.dimGray}}>
              Like
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: wp(25),
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}>
            <Icon
              name={'chat-bubble-outline'}
              size={25}
              color={COLORS.dimGray}
            />
            <Text style={{fontFamily: 'Roboto-Bold', color: COLORS.dimGray}}>
              Comment
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FreedomWallItem;
