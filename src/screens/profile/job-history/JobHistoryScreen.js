/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import moment from 'moment';
import {FetchJobHistory} from '../../../library/api/jobHistoryApi';
import JobHistoryItem from './item';

const JobHistoryScreen = () => {
  const navigation = useNavigation();
  const [jobHistoryData, setJobData] = useState([])

  const getJobHistory = useCallback(async () => {
    await FetchJobHistory()
      .then(async response => {
        console.log(response);
        setJobData(
          response.map(data => ({
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
    getJobHistory();
  }, [getJobHistory]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '95%',
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
      </Header>
      {jobHistoryData.length > 0 ? (
        <FlatList
          data={jobHistoryData}
          renderItem={({item, index}) => (
            <View key={index}>
              <JobHistoryItem
                company={item.title}
                position={item.position}
                dateStarted={item.dateStarted}
                dateEnded={item.dateEnded}
                salary={item.salary}
                status={item.status}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{width: '100%'}}
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
