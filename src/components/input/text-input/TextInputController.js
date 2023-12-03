/* eslint-disable react/prop-types */
import {Input, Text} from '@rneui/themed';
import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Icon} from '@rneui/themed';

import TextInputStyles from './TextInputStyles';

const TextInputController = ({
  name,
  control,
  keyboardType = 'default',
  defaultValue,
  autoCapitalize = 'none',
  errorStyle,
  errorMessage,
  placeholder,
  editable = true,
  headerStyles,
  maxLength,
  multiline,
  numberOfLines,
  headerTitle,
  // getValues,
  // setValue,
  leftIcon,
  secureTextEntry = false,
  rightIconShow = 'visibility',
  rightIconHide = 'visibility-off',
  inputStyle,
}) => {
  const [show, setShow] = useState(secureTextEntry);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => {
        const handleOnChange = itemValue => {
          onChange(itemValue);
        };

        return (
          <View style={{width: '100%', alignItems: 'center'}}>
            {/* header title for personal info */}
            {headerTitle ? (
              <Text style={[TextInputStyles.header, headerStyles]}>
                {headerTitle}
              </Text>
            ) : null}
            <Input
              autoCapitalize={autoCapitalize}
              autoComplete="off"
              allowFontScaling={false}
              onChangeText={handleOnChange}
              secureTextEntry={show}
              defaultValue={defaultValue}
              value={value}
              placeholder={placeholder ?? null}
              editable={editable}
              keyboardType={keyboardType}
              maxLength={maxLength}
              multiline={multiline}
              numberOfLines={numberOfLines}
              errorStyle={[{fontFamily: 'Manrope-Regular'}, errorStyle]}
              errorMessage={errorMessage}
              leftIcon={
                leftIcon ? <Icon name={leftIcon} size={30} /> : undefined
              }
              rightIcon={
                secureTextEntry ? (
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Icon
                      name={show ? rightIconShow : rightIconHide}
                      size={30}
                    />
                  </TouchableOpacity>
                ) : undefined
              }
              style={[TextInputStyles.inputStyle, inputStyle]}
            />
          </View>
        );
      }}
    />
  );
};

export default TextInputController;
