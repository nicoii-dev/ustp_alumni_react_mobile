import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from '@rneui/themed';

import COLORS from '../../../config/constants/colors';

interface PurchaseInterface {
  productId?: string;
  name: string;
  stock: number;
  price: number;
  image: string;
  quantity: number;
}

const PurchaseItem = ({ name, stock, price, image, quantity }: PurchaseInterface) => (

  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <FastImage
        // @ts-ignore
        source={image}
        style={styles.image}
      />
    </View>
      <View style={styles.itemInfo}>
          <Text style={styles.quantity}>x {quantity}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    <View style={{
      position: 'absolute',
      right: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    }}>
    </View>
  </View>

);

export default PurchaseItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    width: wp("90%"),
    height: hp(9),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: COLORS.gray,
    width: wp(18),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    height: hp(6),
    width: wp(8),
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  quantity: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: "Roboto-Medium",
    marginLeft: 0,
  },
  price: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: "Roboto-Bold",
  }
});