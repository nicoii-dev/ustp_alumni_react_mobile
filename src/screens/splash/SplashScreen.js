import {
  View,
  Text,
  Animated,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
// styles
import SplashScreenStyles from './splashscreen-styles';

// config
import UstpImages from '../../config/images/ustp-images';

const SplashScreen = () => {
  const navigation = useNavigation();
  // First set up animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      navigation.navigate('UserTab');
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
