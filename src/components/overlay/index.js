/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Overlay} from 'react-native-elements';
import OverlayStyle from './style';

const GenericOverlay = props => {
  const {isVisible, setIsVisible, children} = props;

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
      }}
      overlayStyle={OverlayStyle.overlayStyle}>
      <View style={OverlayStyle.container}>
        <View style={OverlayStyle.titleContainer}>
          <Text style={[OverlayStyle.titleText, props.titleStyle]}>
            {props.title}
          </Text>
        </View>
        {/* <View style={OverlayStyle.messageContainer}>
          <Text style={OverlayStyle.messageText}>{props.message}</Text>
        </View> */}
        {/* <ButtonComponent
          onPress={() => {
            logoutHandler();
          }}
          color={COLORS.DARK_BLUE}
          size="lg"
          styles={{}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Logout
          </Text>
        </ButtonComponent> */}
        {children}
      </View>
    </Overlay>
  );
};

export default GenericOverlay;
