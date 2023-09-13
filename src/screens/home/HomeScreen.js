import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

// components
import Header from '../../components/header/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
