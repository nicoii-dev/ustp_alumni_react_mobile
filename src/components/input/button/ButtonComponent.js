/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button} from '@rneui/themed';

const ButtonComponent = ({
  styles,
  disabled,
  children,
  onPress,
  color,
  size,
  type,
  buttonProps,
}) => {
  return (
    <Button
      onPress={onPress}
      containerStyle={[{borderRadius: 10}, styles]}
      disabled={disabled}
      color={color}
      size={size}
      type={type}
      {...buttonProps}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
