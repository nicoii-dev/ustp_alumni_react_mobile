/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import {FetchTrainings} from '../../../library/api/trainingsApi';
import moment from 'moment';
import TrainingItem from './item';

const TrainingsScreen = () => {
  const navigation = useNavigation();
  const [trainingsData, setTrainingsData] = useState([]);

  const getEducationalBackground = useCallback(async () => {
    await FetchTrainings()
      .then(async response => {
        console.log(response);
        setTrainingsData(
          response.map(data => ({
            title: data.title,
            topic: data.topic,
            date: moment(data.date).format('LL'),
            duration: data.duration,
            institution: data.institution,
          })),
        );
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    getEducationalBackground();
  }, [getEducationalBackground]);

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
            Trainings
          </Text>
        </View>
      </Header>
      {trainingsData.length > 0 ? (
        <FlatList
          data={trainingsData}
          renderItem={({item, index}) => (
            <View key={index}>
              <TrainingItem
                title={item.title}
                topic={item.topic}
                date={moment(item.date).format('LL')}
                duration={item.duration}
                institution={item.institution}
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

export default TrainingsScreen;
