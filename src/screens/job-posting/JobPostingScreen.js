import {View, FlatList, SafeAreaView, Text} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Header';
import {FetchAllJobPosting} from '../../library/api/jobPostApi';
import JobPostingItem from '../../components/screen/job-posting/JobPostingItem';

const JobPostingScreen = () => {
  const navigation = useNavigation();
  const [jobPostingData, setJobPosting] = useState([]);
  const fetchHandler = useCallback(async () => {
    await FetchAllJobPosting()
      .then(async response => {
        console.log(response);
        setJobPosting(
          response.map(data => ({
            id: data.id,
            images: data.job_images.map(data => data.url),
            title: data.title,
            description: data.description,
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: hp(77), marginBottom: 10, borderRadius: 10}}>
          {jobPostingData.length > 0 ? (
            <FlatList
              data={jobPostingData}
              renderItem={({item, index}) => (
                <View key={index}>
                  <JobPostingItem
                    id={item.id}
                    images={item.images}
                    title={item.title}
                    date={item.date}
                    description={item.description}
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
                <Text style={{fontSize: 18}}>No Data Available</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JobPostingScreen;
