/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React from 'react';
import itemStyle from './itemStyle';
const EmploymentItem = ({employment}) => {
  const array = employment?.state_of_reasons
    ?.split(',')
    .map((item, i) => `Reason ${i + 1}: ${item}\n`);

  return (
    <View style={itemStyle.viewContainer}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          paddingBottom: 20,
          textTransform: 'capitalize',
        }}>{`Currently Employed: ${
        employment?.status ? employment?.status : 'No Data'
      }`}</Text>
      <View style={{flexDirection: 'row', gap: 5}}>
        {employment?.status === 'yes' ? (
          <>
            <View>
              <Text style={itemStyle.itemData}>
                {/* {`Currently Employed:\n`} */}
                {`Status:\n`}
                {`Occupation:\n`}
                {`Line of Business:\n`}
                {`Profession:\n`}
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
                {/* {`${employment?.status}\n`} */}
                {`${employment?.type}\n`}
                {`${employment?.present_occupation} \n`}
                {`${employment?.line_of_business} \n`}
                {`${employment?.profession} \n`}
              </Text>
            </View>
          </>
        ) : (
          <>
            <View>
              <Text style={itemStyle.itemData}>{`State of Reasons:\n`}</Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                  fontSize: 15,
                  color: 'black',
                  fontWeight: '700',
                  textTransform: 'capitalize',
                }}>
                {array ? array : 'No Data'}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default EmploymentItem;
