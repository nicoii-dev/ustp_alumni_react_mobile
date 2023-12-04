/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

// components
import COLORS from '../../../config/constants/colors';
import UstpImages from '../../../config/images/ustp-images';

const FreedomWallItem = ({id, user, images, title, date}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 10,
        width: wp('90%'),
        height: images.length <= 0 ? hp('25') : hp('50'),
        maxHeight: images.length <= 0 ? hp('25') : hp('50'),
        marginBottom: 15,
        position: 'relative',
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{alignItems: 'flex-start', padding: 10, flexDirection: 'row'}}>
        <FastImage
          // @ts-ignore
          source={UstpImages.ustpLogo}
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
              textTransform: 'capitalize',
            }}>
            {user}
          </Text>
          <Text
            style={{
              color: COLORS.dimGray,
              fontFamily: 'Roboto-Regular',
              fontSize: 10,
            }}>
            {moment(date).format('LLL')}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <Text
          style={{
            marginBottom: 10,
            paddingLeft: 20,
            paddingRight: 10,
            fontFamily: 'Roboto-Regular',
            color: COLORS.black,
          }}
          numberOfLines={4}>
          {title}
        </Text>
        {images.length < 1 ? (
          <Pressable>
            <Text
              style={{
                alignSelf: 'flex-end',
                textDecorationLine: 'underline',
                position: 'absolute',
                top: -8,
                right: 20,
              }}>
              See more...
            </Text>
          </Pressable>
        ) : null}
      </View>
      {images.length <= 1
        ? images?.map((data, index) => {
            return (
              <FastImage
                key={index}
                source={{
                  uri: `http://localhost:8000/storage/${data}`,
                }}
                style={{
                  height: '45%',
                  width: '100%',
                }}
                resizeMode="contain"
              />
            );
          })
        : null}

      {images.length > 1 && images.length <= 2 ? (
        <View style={{flex: 1, flexDirection: 'row'}}>
          {images?.map((data, index) => {
            return (
              <FastImage
                key={index}
                source={{
                  uri: `http://localhost:8000/storage/${data}`,
                }}
                style={{
                  height: hp('30'),
                  width: '50%',
                }}
                resizeMode="contain"
              />
            );
          })}
        </View>
      ) : null}

      {images.length > 2 ? (
        <FlatList
          data={images.slice(0, 4)}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
                margin: 1,
              }}>
              <Pressable
                onPress={() =>
                  navigation.navigate('ViewPostScreen', {postId: id})
                }>
                <FastImage
                  key={index}
                  source={{
                    uri: `http://localhost:8000/storage/${item}`,
                  }}
                  style={{
                    height: hp('15%'),
                    width: '100%',
                  }}
                  resizeMode="stretch"
                />
              </Pressable>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      ) : null}
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
