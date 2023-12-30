import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

// components
import Header from '../../components/header/Header';
import FreedomWallItem from '../../components/screen/freedom-wall/FreedomWallItem';

// api
import {FetchAllPost} from '../../library/api/postApi';
import COLORS from '../../config/constants/colors';
import UstpImages from '../../config/images/ustp-images';
import {useStorage} from '../../library/storage/Storage';
import {USER} from '../../library/constants';

const FreedomWallScreen = () => {
  const navigation = useNavigation();
  const [post, setPost] = useState([]);

  const [user, setUser] = useState(null);

  const getUser = useCallback(async () => {
    const data = await useStorage.getItem(USER.USER_DATA);
    setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const fetchHandler = useCallback(async () => {
    await FetchAllPost()
      .then(async response => {
        setPost(
          response.map(data => ({
            id: data.id,
            images: data.post_images.map(data => data.url),
            title: data.title,
            date: data.created_at,
            user: `${data.post_owner.first_name} ${data.post_owner.middle_name} ${data.post_owner.last_name}`,
            post_likes: data.post_likes.map(data => data),
            profile: data?.post_owner?.image,
          })),
        );
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

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await FetchAllPost()
      .then(async response => {
        console.log(response);
        setPost(
          response.map(data => ({
            id: data.id,
            images: data.post_images.map(data => data.url),
            title: data.title,
            date: data.created_at,
            user: `${data.post_owner.first_name} ${data.post_owner.middle_name} ${data.post_owner.last_name}`,
            post_likes: data.post_likes.map(data => data),
            profile: data?.post_owner?.image,
          })),
        );
      })
      .finally(() => {
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            padding: 10,
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            width: '100%',
            marginTop: 50,
            alignContent: 'center',
          }}>
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
              marginLeft: 20,
            }}
            resizeMode="stretch"
          />
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => navigation.navigate('CreatePostScreen')}>
            <View
              style={{
                borderColor: COLORS.darkGray,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                width: widthPercentageToDP(60),
              }}>
              <Text style={{color: COLORS.black}}>
                {"What's on your mind?"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: hp(77),
            marginBottom: 10,
            borderRadius: 10,
            marginTop: 10,
          }}>
          {post.length > 0 ? (
            <FlatList
              data={post}
              renderItem={({item, index}) => (
                <View key={index}>
                  <FreedomWallItem
                    id={item.id}
                    profilePic={item.profile}
                    user={item.user}
                    images={item.images}
                    title={item.title}
                    date={item.date}
                    onRefresh={onRefresh}
                    post_likes={item.post_likes}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{}}>
                <Text style={{fontSize: 18}}>No Post Available</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FreedomWallScreen;
