import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../config/constants/colors';

interface MenuInterface {
  productId?: string,
  name: string,
  description: string,
  stock: number,
  price: number,
  image: string,
  inCart: boolean
}

const MenuItem = ({ name, description, stock, price, image, inCart }: MenuInterface) => (

  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <View style={{
        position: 'absolute',
        right: 5,
        top: 5,
        borderRadius: 50,
        backgroundColor: 'white',
        height: hp(5),
        width: wp(10),
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
          inCart ? <Icon name={'cart'} size={25} style={{ color: COLORS.yellow, borderRadius: 50, justifyContent: 'center' }} />
            : <Icon name={'cart-outline'} size={25} style={{ color: COLORS.black, borderRadius: 50, justifyContent: 'center' }} />
        }
      </View>
      <FastImage
        // @ts-ignore
        source={image}
        style={styles.image}
      />
    </View>
    <View style={styles.itemInfoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.stockText}>Stock: {stock}</Text>
      <Text style={styles.priceText}>${price.toFixed(2)}</Text>
    </View>

    {/* <Text style={styles.description}>{description}</Text>
    <View style={styles.stockPriceContainer}>
    <Text style={styles.name}>{name}</Text>
      <Text style={{ color: 'black' }}>Stock: {stock}</Text>
      <Text style={{ color: 'black' }}>Price: ${price}</Text>
    </View> */}
  </View>

);

export default MenuItem

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 0,
    marginVertical: 12,
    marginHorizontal: 5,
    width: wp(45),
    height: hp(25),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  imageContainer: {
    position: 'relative',
    top: 0,
    backgroundColor: COLORS.gray,
    width: wp(45),
    height: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {
    position: 'absolute',
    height: hp(9),
    width: wp(10),
  },
  itemInfoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
    width: "100%",
  },
  name: {
    color: COLORS.black,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  stockText: {
    color: COLORS.gray
  },
  priceText: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    marginTop: 10,
    color: COLORS.black
  }
});