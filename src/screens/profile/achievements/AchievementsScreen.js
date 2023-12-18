/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import moment from 'moment';
import AchievementItem from './item';
import { FetchAllAchievements } from '../../../library/api/achievementsApi';

const AchievementsScreen = () => {
  const navigation = useNavigation();
  const [trainingsData, setTrainingsData] = useState([]);

  const getAchievements = useCallback(async () => {
    await FetchAllAchievements()
      .then(async response => {
        console.log(response);
        setTrainingsData(
          response.map(data => ({
            id: data.id,
            title: data.title,
            category: data.category,
            date: moment(data.date).format('LL'),
            description: data.description,
          })),
        );
      })
      .finally(() => {
        setTimeout(() => {}, 2000);
      });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getAchievements();
    });
  }, [getAchievements, navigation]);

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
            Achievements
          </Text>
        </View>
        {/* <Icon
          name={'add'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', right: 30}}
          onPress={() => navigation.navigate('AddTrainingsScreen')}
        /> */}
      </Header>
      {trainingsData.length > 0 ? (
        <FlatList
          data={trainingsData}
          renderItem={({item, index}) => (
            <View key={index}>
              <AchievementItem
                id={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                description={item.description}
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

export default AchievementsScreen;
