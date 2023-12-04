/* eslint-disable react/prop-types */
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
// components
import UstpImages from '../../config/images/ustp-images';
import COLORS from '../../config/constants/colors';
// api
import {ViewPost} from '../../library/api/postApi';
import ModalComponent from '../../components/modal/ModalComponent';
import Comment from '../../components/screen/freedom-wall/Comment';

const ViewPostScreen = ({route}) => {
  const navigation = useNavigation();
  const {postId} = route.params;
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const fetchHandler = useCallback(async () => {
    await ViewPost(postId)
      .then(async response => {
        setPost({
          id: response.id,
          images: response.post_images.map(data => data.url),
          title: response.title,
          date: response.created_at,
          user: `${response.post_owner.first_name} ${response.post_owner.middle_name} ${response.post_owner.last_name}`,
        });
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchHandler();
    });
  }, [fetchHandler, navigation]);
  console.log(post.images);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header /> */}
      <View
        style={{alignItems: 'flex-start', padding: 10, flexDirection: 'row'}}>
        <FastImage
          // @ts-ignore
          source={UstpImages.ustpLogo}
          style={{
            height: hp(5),
            width: hp(5),
            borderRadius: 5,
          }}
          resizeMode="stretch"
        />
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Roboto-Bold',
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            {post.user}
          </Text>
          <Text
            style={{
              color: COLORS.dimGray,
              fontFamily: 'Roboto-Regular',
              fontSize: 10,
            }}>
            {moment(post.date).format('LLL')}
          </Text>
        </View>
      </View>
      <View style={{borderWidth: 0.5}} />
      <View style={{marginTop: 5}}>
        <Text
          style={{
            marginBottom: 10,
            paddingLeft: 20,
            paddingRight: 10,
            fontFamily: 'Roboto-Regular',
            color: COLORS.black,
          }}>
          {post.title}
        </Text>
      </View>
      <View style={{borderWidth: 0.5}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          padding: 5,
        }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: wp(25),
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}>
            <Icon name={'thumb-up-off-alt'} size={25} color={COLORS.dimGray} />
            <Text style={{fontFamily: 'Roboto-Bold', color: COLORS.dimGray}}>
              Like
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <View
            style={{
              flexDirection: 'row',
              width: wp(25),
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}>
            <Icon
              name={'chat-bubble-outline'}
              size={25}
              color={COLORS.dimGray}
            />
            <Text style={{fontFamily: 'Roboto-Bold', color: COLORS.dimGray}}>
              Comment
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={post.images}
        renderItem={({item, index}) => (
          <>
            <FastImage
              key={index}
              source={{
                uri: `https://ustpalumnilaravelapi-production.up.railway.app/storage/${item}`,
              }}
              style={{
                height: hp('25%'),
                width: '100%',
                backgroundColor: 'black',
                marginTop: 2,
              }}
              resizeMode="contain"
            />
            <View style={{borderWidth: 0.5}} />
          </>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Comment />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default ViewPostScreen;
