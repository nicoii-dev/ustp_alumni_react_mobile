/* eslint-disable prettier/prettier */
import {View, Text, FlatList, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import moment from 'moment';
import {FetchAllJobHistory} from '../../../library/api/jobHistoryApi';
import JobHistoryItem from './item';

const JobHistoryScreen = () => {
  const navigation = useNavigation();
  const [jobHistoryData, setJobData] = useState([]);

  const getJobHistory = useCallback(async () => {
    await FetchAllJobHistory()
      .then(async response => {
        console.log(response);
        setJobData(
          response.map(data => ({
            id: data.id,
            company: data.company,
            position: data.position,
            dateStarted: moment(data.date_started).format('LL'),
            dateEnded: moment(data.date_ended).format('LL'),
            salary: data.salary,
            status: data.status,
          })),
        );
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getJobHistory();
    });
  }, [getJobHistory, navigation]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await FetchAllJobHistory()
      .then(async response => {
        console.log(response);
        setJobData(
          response.map(data => ({
            id: data.id,
            company: data.company,
            position: data.position,
            dateStarted: moment(data.date_started).format('LL'),
            dateEnded: moment(data.date_ended).format('LL'),
            salary: data.salary,
            status: data.status,
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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
      }}>
      <Header>
        <Icon
          name={'arrow-back'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', left: 30}}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: COLORS.navyBlue,
              textAlign: 'center',
            }}>
            Job History
          </Text>
        </View>
        <Icon
          name={'add'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', right: 30}}
          onPress={() => navigation.navigate('AddJobHistoryScreen')}
        />
      </Header>
      {jobHistoryData.length > 0 ? (
        <FlatList
          data={jobHistoryData}
          renderItem={({item, index}) => (
            <View key={index}>
              <JobHistoryItem
                id={item.id}
                company={item.company}
                position={item.position}
                dateStarted={item.dateStarted}
                dateEnded={item.dateEnded}
                salary={item.salary}
                status={item.status}
                onRefresh={onRefresh}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{width: '95%'}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{}}>
            <Text style={{fontSize: 18}}>No Data Available</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default JobHistoryScreen;
