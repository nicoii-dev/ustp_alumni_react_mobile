/* eslint-disable react/prop-types */
import {View, Text, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import UstpImages from '../../../config/images/ustp-images';
import {useStorage} from '../../../library/storage/Storage';
import {USER} from '../../../library/constants';
import COLORS from '../../../config/constants/colors';
import {setComment} from '../../../store/commentSlice';

const CommentItems = ({comment, id, owner}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const getUser = React.useCallback(async () => {
    let user = await useStorage.getItem(USER.USER_DATA);
    setUserData(JSON.parse(user));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <View
        style={{
          backgroundColor: '#E0E0E0',
          width: '100%',
          padding: 5,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', gap: 4}}>
          <FastImage
            // @ts-ignore
            source={
              owner?.image
                ? {
                    uri: `https://ustpalumnilaravelapi-production.up.railway.app/storage/${owner?.image}`,
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
              {userData?.id === owner?.id ? (
                <Icon
                  name={'edit'}
                  size={20}
                  color={COLORS.navyBlue}
                  style={{position: 'absolute', right: 0, top: 0}}
                  onPress={() => dispatch(setComment({id: id, text: comment}))}
                />
              ) : null}
            </View>

            <Text style={{color: 'black'}}>{comment}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const Comment = ({comments}) => {
  return (
    <View style={{width: '100%', height: '90%'}}>
      <FlatList
        data={comments?.comments}
        renderItem={({item, index}) => (
          <View key={index}>
            <CommentItems
              comment={item.comment}
              id={item.id}
              owner={item.comment_owner}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
      />
    </View>
  );
};

export default Comment;
