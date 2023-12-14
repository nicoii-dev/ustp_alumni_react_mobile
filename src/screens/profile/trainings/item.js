/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React from 'react';
import itemStyle from './itemStyle';
const TrainingItem = ({title, topic, date, duration, institution}) => {
  return (
    <View style={itemStyle.viewContainer}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View>
          <Text style={itemStyle.itemData}>
            {`Title:\n`}
            {`Topic:\n`}
            {`Date:\n`}
            {`Duration:\n`}
            {`Institution:\n`}
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
            {`${title}\n`}
            {`${topic}\n`}
            {`${date} \n`}
            {`${duration} \n`}
            {`${institution} \n`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TrainingItem;
