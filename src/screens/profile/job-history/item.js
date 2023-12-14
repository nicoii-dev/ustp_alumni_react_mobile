/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React from 'react';
import itemStyle from './itemStyle';
const JobHistoryItem = ({
  company,
  position,
  dateStarted,
  dateEnded,
  salary,
  status,
}) => {
  return (
    <View style={itemStyle.viewContainer}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View>
          <Text style={itemStyle.itemData}>
            {`Company:\n`}
            {`Position:\n`}
            {`Date Starte:\n`}
            {`Date Ended:\n`}
            {`Salary:\n`}
            {`Status:\n`}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 15,
              color: 'black',
              fontWeight: '700',
              textTransform: 'capitalize',
            }}>
            {`${company}\n`}
            {`${position}\n`}
            {`${dateStarted} \n`}
            {`${dateEnded} \n`}
            {`${salary} \n`}
            {`${status} \n`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default JobHistoryItem;
