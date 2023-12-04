/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import FreedomWallScreen from '../../screens/freedom-wall/FreedomWallScreen';
import ViewPostScreen from '../../screens/freedom-wall/ViewPostScreen';

// stack instance
const PostStack = createStackNavigator();

const Post = () => {
  return (
    <PostStack.Navigator initialRouteName="Freedom Wall">
      <PostStack.Screen
        name="Freedom Wall"
        component={FreedomWallScreen}
        options={{headerShown: false}}
      />
      <PostStack.Screen
        name="ViewPostScreen"
        component={ViewPostScreen}
        options={{headerShown: false}}
      />
    </PostStack.Navigator>
  );
};

export default Post;
