import React, { useEffect, useState, useCallback } from "react";
import Toast from 'react-native-simple-toast';
import { BackHandler } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

// screens
import MenuScreen from "../../screens/menu/MenuScreen";
import CartScreen from "../../screens/cart/CartScreen";
import CheckoutScreen from "../../screens/checkout/CheckoutScreen";

// stack instance
const MenuStack = createStackNavigator();

export default () => {
  
  return (
    <MenuStack.Navigator initialRouteName="MenuScreen">
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          //   tabBarStyle: {display: 'none'},
          headerShown: false,
        }}
      />
      <MenuStack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
    </MenuStack.Navigator>
  );
};
