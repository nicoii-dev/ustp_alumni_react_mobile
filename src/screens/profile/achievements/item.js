/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React from 'react';
import itemStyle from './itemStyle';
const AchievementItem = ({title, category, date, description}) => {
  return (
    <View style={itemStyle.viewContainer}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View>
          <Text style={itemStyle.itemData}>
            {`Title:\n`}
            {`Category:\n`}
            {`Date:\n`}
            {`Description:\n`}
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
            {`${category}\n`}
            {`${date} \n`}
            {`${description} \n`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AchievementItem;
