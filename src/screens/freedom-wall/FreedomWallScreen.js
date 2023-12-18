import {View, SafeAreaView, FlatList, Text} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

// components
import Header from '../../components/header/Header';
import FreedomWallItem from '../../components/screen/freedom-wall/FreedomWallItem';

// api
import {FetchAllPost} from '../../library/api/postApi';

const FreedomWallScreen = () => {
  const navigation = useNavigation();
  const [post, setPost] = useState([]);
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: hp(77), marginBottom: 10, borderRadius: 10}}>
          {post.length > 0 ? (
            <FlatList
              data={post}
              renderItem={({item, index}) => (
                <View key={index}>
                  <FreedomWallItem
                    id={item.id}
                    user={item.user}
                    images={item.images}
                    title={item.title}
                    date={item.date}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
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
