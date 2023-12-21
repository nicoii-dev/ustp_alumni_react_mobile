import {View, FlatList, SafeAreaView, Text, RefreshControl} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Header';
import AnnouncementItem from '../../components/screen/annoucements/AnnouncementItem';
import {FetchAllAnnouncements} from '../../library/api/announcementApi';

const AnnouncementsScreen = () => {
  const navigation = useNavigation();
  const [announcementData, setAnnouncement] = useState([]);
  const fetchHandler = useCallback(async () => {
    await FetchAllAnnouncements()
      .then(async response => {
        console.log(response);
        setAnnouncement(
          response.map(data => ({
            id: data.id,
            images: data.announcement_images.map(data => data.url),
            title: data.title,
            announcement: data.announcement,
            date: data.created_at,
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
    await FetchAllAnnouncements()
      .then(async response => {
        console.log(response);
        setAnnouncement(
          response.map(data => ({
            id: data.id,
            images: data.announcement_images.map(data => data.url),
            title: data.title,
            announcement: data.announcement,
            date: data.created_at,
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: hp(77), marginBottom: 10, borderRadius: 10}}>
          {announcementData.length > 0 ? (
            <FlatList
              data={announcementData}
              renderItem={({item, index}) => (
                <View key={index}>
                  <AnnouncementItem
                    id={item.id}
                    images={item.images}
                    title={item.title}
                    date={item.date}
                    announcement={item.announcement}
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
                <Text style={{fontSize: 18}}>No Announcement Available</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AnnouncementsScreen;
