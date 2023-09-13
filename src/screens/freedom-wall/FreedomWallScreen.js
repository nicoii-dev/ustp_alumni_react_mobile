import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Header from '../../components/header/Header';
import ExampleImage from '../../config/images/example-images';
import FreedomWallItem from '../../components/screen/freedom-wall/FreedomWallItem';

const DATA = [
  {
    id: '1',
    user: 'Test User 1',
    description:
      'The primary purpose of Public Service Announcements is to support and improve the community by raising awareness of specific issues that impact that community. For example, a PSA can warn the public against drunk driving or promote the use of seat belts.',
    image: ExampleImage.image1,
  },
  {
    id: '2',
    user: 'Test User 2',
    description:
      'An article is a word that is used to indicate that a noun is a noun without describing it. For example, in the sentence Nick bought a dog, the article a indicates that the word dog is a noun.',
    image: null,
  },
  {
    id: '3',
    user: 'Test User 3',
    description: 'This is announcement 3',
    image: ExampleImage.image3,
  },
  {
    id: '4',
    user: 'Test User 4',
    description: 'This is announcement 4',
    image: ExampleImage.image4,
  },
  {
    id: '5',
    user: 'Test User 5',
    description: 'This is announcement 5',
    image: ExampleImage.image5,
  },
];

const FreedomWallScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: hp(77), marginBottom: 10, borderRadius: 10}}>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <View key={index}>
                <FreedomWallItem
                  id={item.id}
                  user={item.user}
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

export default FreedomWallScreen;
