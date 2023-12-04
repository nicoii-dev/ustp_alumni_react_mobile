/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateInputController = ({
  mode = 'date',
  name,
  control,
  rules,
  styles,
  headerTitle,
  headerStyles,
  display,
  disabled,
  errorMessage,
  errorStyle,
  iconData,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value}}) => {
          const hanleOnDateChange = (event, selectedDate) => {
            onChange(selectedDate);
            setShow(!show);
          };

          return (
            <View>
              {headerTitle ? (
                <Text
                  style={[
                    {
                      fontSize: 18,
                      width: '95%',
                      fontFamily: 'Manrope-Regular',
                      color: 'black',
                      alignSelf: 'center',
                    },
                    headerStyles,
                  ]}>
                  {headerTitle}
                </Text>
              ) : null}
              {show && (
                <RNDateTimePicker
                  testID="dateTimePicker"
                  value={value ? new Date(value) : new Date()}
                  mode={mode}
                  display={display}
                  onChange={hanleOnDateChange}
                  maximumDate={new Date()}
                  style={{backgroundColor: '#E0E0E0'}}
                />
              )}
              {!show && (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  disabled={disabled}
                  onPress={() => {
                    setShow(true);
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    {mode === 'date' ? (
                      <Text style={{fontSize: 18}}>
                        {value
                          ? moment(value).format('MM/DD/YYYY')
                          : 'MM/DD/YYYY'}
                      </Text>
                    ) : (
                      <Text style={{fontSize: 18}}>
                        {value ? moment(value).format('h:mm:ss A') : '00:00:00'}
                      </Text>
                    )}
                    {iconData && (
                      <Icon
                        name={iconData.iconName}
                        size={iconData.iconSize}
                        color={iconData.iconColor}
                        style={{marginLeft: 5}}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
      {errorMessage ? (
        <Text
          style={[
            {
              color: 'red',
              fontSize: 12,
              alignSelf: 'flex-start',
              marginLeft: 10,
            },
            errorStyle,
          ]}>
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

export default DateInputController;
