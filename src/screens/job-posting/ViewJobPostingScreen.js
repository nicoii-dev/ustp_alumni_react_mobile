/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/themed';
import COLORS from '../../config/constants/colors';
import Header from '../../components/header/Header';

const ViewJobPostingScreen = () => {
  const {jobPosting} = useSelector(state => state.jobPosting);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        width: wp('100%'),
        height: hp('35%'),
        marginBottom: 15,
        position: 'relative',
        backgroundColor: COLORS.white,
        alignItems: 'center',
      }}>
      {/* <Card.Title>HELLO WORLD</Card.Title>
      <Card.Divider /> */}
      <Header>
        <View style={{alignItems: 'center'}}>
          <View style={{position: 'absolute', left: 30, top: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-back'} size={30} color={COLORS.navyBlue} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 20,
              color: COLORS.navyBlue,
              fontWeight: 'bold',
            }}>
            Job Posting
          </Text>
        </View>
      </Header>
      {jobPosting.images.length < 1 ? (
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
              {jobPosting.title}
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
              {jobPosting.description}
            </Text>
          </View>
        </>
      ) : (
        <>
          <FastImage
            // @ts-ignore
            source={{
              uri: `https://ustpalumnilaravelapi-production.up.railway.app/storage/${jobPosting.images[0]}`,
            }}
            style={{
              height: '50%',
              width: '95%',
              borderRadius: 5,
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
              {jobPosting.title}
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
              {jobPosting.description}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ViewJobPostingScreen;
