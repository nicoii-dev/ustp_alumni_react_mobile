/* eslint-disable react/prop-types */
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Input} from '@rneui/themed';
import React, {useState, useEffect, useCallback} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
// components
import UstpImages from '../../config/images/ustp-images';
import COLORS from '../../config/constants/colors';
// api
import {ViewPost} from '../../library/api/postApi';
import ModalComponent from '../../components/modal/ModalComponent';
import Comment from '../../components/screen/freedom-wall/Comment';
import {loadingStart, loadingFinish} from '../../store/loader/LoaderSlice';
import {CreateComment, UpdateComment} from '../../library/api/commentApi';
import {setComment} from '../../store/commentSlice';
import CommentItems from './CommentItems';
import {useStorage} from '../../library/storage/Storage';
import {USER} from '../../library/constants';

const ViewPostScreen = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {postId} = route.params;
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const {comment} = useSelector(state => state.comment);

  const [user, setUser] = useState(null);

  const getUser = useCallback(async () => {
    const data = await useStorage.getItem(USER.USER_DATA);
    setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const fetchHandler = useCallback(async () => {
    await ViewPost(postId)
      .then(async response => {
        setPost({
          id: response.id,
          images: response.post_images.map(data => data.url),
          title: response.title,
          date: response.created_at,
          user: `${response.post_owner.first_name} ${response.post_owner.middle_name} ${response.post_owner.last_name}`,
          comments: response.post_comments,
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

  const handleCommentChange = e => {
    dispatch(
      setComment({
        ...comment,
        text: e,
      }),
    );
  };

  const onSubmit = async () => {
    dispatch(loadingStart());
    const payload = {
      post_id: post.id,
      comment: comment.text,
    };

    if (comment.id === null) {
      try {
        const response = await CreateComment(payload);
        dispatch(loadingFinish());
        if (!_.isUndefined(response)) {
          fetchHandler();
          dispatch(setComment({id: null, text: ''}));
        }
      } catch (error) {
        console.log(error);
        dispatch(loadingFinish());
      }
    } else {
      try {
        const response = await UpdateComment(comment.id, payload);
        dispatch(loadingFinish());
        if (!_.isUndefined(response)) {
          fetchHandler();
          dispatch(setComment({id: null, text: ''}));
        }
      } catch (error) {
        console.log(error);
        dispatch(loadingFinish());
      }
    }

    dispatch(loadingFinish());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header /> */}
      <View
        style={{alignItems: 'flex-start', padding: 10, flexDirection: 'row'}}>
        <FastImage
          // @ts-ignore
          source={
            user?.image
              ? {uri: `https://ustpalumnilaravelapi-production.up.railway.app/storage/${user.image}`}
              : UstpImages.ustpLogo
          }
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
        ListFooterComponent={
          <View
            style={{
              alignItems: 'center',
            }}>
            {post?.comments?.map((item, index) => {
              return (
                <CommentItems
                  key={index}
                  comment={item.comment}
                  owner={item.comment_owner}
                />
              );
            })}
          </View>
        }
      />

      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        style={{width: '95%', height: '95%', justifyContent: 'flex-start'}}>
        <Comment comments={post} />
        <View
          style={{
            width: widthPercentageToDP(95),
            alignItems: 'center',
            position: 'absolute',
            bottom: -1,
            backgroundColor: '#F5F5F5',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Input
            allowFontScaling={false}
            onChangeText={handleCommentChange}
            value={comment.text}
            placeholder={'Comment'}
            numberOfLines={10}
            errorStyle={[{fontFamily: 'Manrope-Regular'}]}
            rightIcon={
              <TouchableOpacity onPress={onSubmit}>
                <Icon name={'send'} size={30} />
              </TouchableOpacity>
            }
            style={{
              fontSize: 16,
              marginVertical: -5,
              fontFamily: 'Manrope-Regular',
              height: 15,
              color: 'black',
            }}
          />
        </View>
      </ModalComponent>
    </SafeAreaView>
  );
};

export default ViewPostScreen;
