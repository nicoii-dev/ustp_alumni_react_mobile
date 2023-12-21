/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import UstpImages from '../../config/images/ustp-images';

const CommentItems = ({key, comment, owner}) => {
  return (
    <>
      <View
        key={key}
        style={{
          backgroundColor: '#E0E0E0',
          width: '90%',
          padding: 5,
          borderRadius: 10,
          marginTop: 15,
        }}>
        <View style={{flexDirection: 'row', gap: 4}}>
          <FastImage
            // @ts-ignore
            source={
              owner?.image
                ? {
                    uri: `http://localhost:8000/storage/${owner?.image}`,
                  }
                : UstpImages.ustpLogo
            }
            style={{
              height: 35,
              width: 35,
              borderRadius: 150,
            }}
            resizeMode="stretch"
          />
          <View style={{width: '85%'}}>
            <View style={{position: 'relative'}}>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  color: 'black',
                }}>{`${owner.first_name} ${owner.middle_name} ${owner.last_name}`}</Text>
            </View>

            <Text style={{color: 'black'}}>{comment}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CommentItems;
