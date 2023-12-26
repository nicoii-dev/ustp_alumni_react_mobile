import {Animated, SafeAreaView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import _ from 'lodash';

// styles
import SplashScreenStyles from './splashscreen-styles';

// config
import UstpImages from '../../config/images/ustp-images';
import {useStorage} from '../../library/storage/Storage';
import {USER} from '../../library/constants';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // First set up animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [userData, setUserData] = useState(null);
  const getUser = React.useCallback(async () => {
    let user = await useStorage.getItem(USER.USER_DATA);
    setUserData(JSON.parse(user));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    const getToken = async () => {
      const token = await useStorage.getItem(USER.ACCESS_TOKEN);
      console.log('test', userData.address);
      const timer = setTimeout(() => {
        if (token) {
          if (!_.isNull(userData?.address)) {
            navigation.navigate('UserTab');
          } else {
            navigation.navigate('SetupProfileStack');
          }
        } else {
          navigation.navigate('AuthStack');
        }

        return () => {
          clearTimeout(timer);
        };
      }, 2000);
    };

    getToken();
  }, [dispatch, navigation]);

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // @ts-ignore
  //     navigation.navigate('UserTab');
  //   }, 3500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <SafeAreaView style={SplashScreenStyles.container}>
      <Animated.View
        style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <FastImage
          // @ts-ignore
          source={UstpImages.ustpLogo}
          style={SplashScreenStyles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
