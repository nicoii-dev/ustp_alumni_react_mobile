/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../config/constants/colors';
import {setAnnouncement} from '../../../store/announcement/AnnouncementSlice';

const AnnouncementItem = ({id, images, title, announcement, date}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const annoucementHandler = () => {
    const payload = {
      id: id,
      images: images,
      title: title,
      announcement: announcement,
      date: date,
    };
    dispatch(setAnnouncement(payload));
    navigation.navigate('ViewAnnouncementScreen');
  };
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
      {images.length < 1 ? (
        <>
          <View
            style={{
              marginTop: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                fontFamily: 'Roboto-Regular',
                color: COLORS.black,
                fontWeight: 'bold',
                fontSize: 20,
                fontStyle: 'italic',
                textTransform: 'capitalize',
                textDecorationLine: 'underline',
              }}
              numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginBottom: 10,
                paddingLeft: 25,
                paddingRight: 25,
                fontFamily: 'Roboto-Regular',
                color: COLORS.black,
                fontSize: 16,
                textAlign: 'center',
              }}
              numberOfLines={8}>
              {announcement}
            </Text>
          </View>
        </>
      ) : (
        <>
          <FastImage
            // @ts-ignore
            source={{
              uri: `http://localhost:8000/storage/${images[0]}`,
            }}
            style={{
              height: '50%',
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            resizeMode="stretch"
          />
          <View
            style={{
              marginTop: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                fontFamily: 'Roboto-Regular',
                color: COLORS.black,
                fontWeight: 'bold',
                fontSize: 20,
                fontStyle: 'italic',
                textTransform: 'capitalize',
                textDecorationLine: 'underline',
              }}
              numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text
              style={{
                marginBottom: 10,
                paddingLeft: 10,
                paddingRight: 10,
                fontFamily: 'Roboto-Regular',
                color: COLORS.black,
                textAlign: 'center',
              }}
              numberOfLines={3}>
              {announcement}
            </Text>
          </View>
        </>
      )}
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
          }}
          onPress={annoucementHandler}>
          <Text style={{color: COLORS.white, fontFamily: 'Roboto-Bold'}}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnnouncementItem;
