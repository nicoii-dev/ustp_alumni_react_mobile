import {View, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/header/Header';
import ExampleImage from '../../config/images/example-images';
import AnnouncementItem from '../../components/screen/annoucements/AnnouncementItem';

const DATA = [
  {
    id: '1',
    description:
      'The primary purpose of Public Service Announcements is to support and improve the community by raising awareness of specific issues that impact that community. For example, a PSA can warn the public against drunk driving or promote the use of seat belts.',
    image: ExampleImage.image1,
  },
  {
    id: '2',
    description: 'This is announcement 2',
    image: ExampleImage.image2,
  },
  {
    id: '3',
    description: 'This is announcement 3',
    image: ExampleImage.image3,
  },
  {
    id: '4',
    description: 'This is announcement 4',
    image: ExampleImage.image4,
  },
  {
    id: '5',
    description: 'This is announcement 5',
    image: ExampleImage.image5,
  },
];

const AnnouncementsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: hp(77), marginBottom: 10, borderRadius: 10}}>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <View key={index}>
                <AnnouncementItem
                  id={item.id}
                  image={item.image}
                  description={item.description}
                />
              </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AnnouncementsScreen;
