/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Overlay} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import OverlayStyle from './style';
import ButtonComponent from '../../input/button/ButtonComponent';
import COLORS from '../../../config/constants/colors';
import { useStorage } from '../../../library/storage/Storage';
import { USER } from '../../../library/constants';

const LogoutOverlay = props => {
  const {isVisible, setIsVisible} = props;
  const navigation = useNavigation();

  const logoutHandler = async () => {
    await useStorage.removeItem(USER.ACCESS_TOKEN);
    await useStorage.removeItem(USER.USER_DATA);
    navigation.navigate('AuthStack');
  };

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
      }}
      overlayStyle={OverlayStyle.overlayStyle}>
      <View style={OverlayStyle.container}>
        <View style={OverlayStyle.titleContainer}>
          <Text style={OverlayStyle.titleText}>{props.title}</Text>
        </View>
        <View style={OverlayStyle.messageContainer}>
          <Text style={OverlayStyle.messageText}>{props.message}</Text>
        </View>
        <ButtonComponent
          onPress={() => {
            logoutHandler();
          }}
          color={COLORS.DARK_BLUE}
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Logout
          </Text>
        </ButtonComponent>
      </View>
    </Overlay>
  );
};

export default LogoutOverlay;
