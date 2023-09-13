import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from '@rneui/themed';

import COLORS from '../../../config/constants/colors';

interface CartInterface {
  productId?: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  image: string;
  quantity: number;
  addQty: Function;
  subQty: Function;
}

const CartItem = ({ name, description, stock, price, image, quantity, addQty, subQty }: CartInterface) => (

  <View style={styles.item}>
    {/* <CheckBox
      title=''
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checked={true}
    /> */}
    <View style={styles.imageContainer}>
      <FastImage
        // @ts-ignore
        source={image}
        style={styles.image}
      />
    </View>
    <View style={{
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      marginLeft: 15,
    }}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.stock}>Stock: {stock}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        {/* <TouchableOpacity onPress={() => addQty()}>
          <Icon name={'add'} size={30} style={{ backgroundColor: '#614BC3', borderRadius: 50, justifyContent: 'center', color: 'white' }} />
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{quantity}</Text>
        <TouchableOpacity onPress={() => subQty()}>
          <Icon name={'remove'} size={30} style={{ backgroundColor: '#E0E0E0', borderRadius: 50, justifyContent: 'center' }} />
        </TouchableOpacity> */}
        <View style={styles.quantityUpdateContainer}>
        <TouchableOpacity onPress={() => subQty()}>
          <View style={styles.optionContainer}>
            <Text style={{fontSize: 18}}>-</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <Text style={{fontFamily: "Roboto-Bold", fontWeight: 'bold'}}>{quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => addQty()}>
          <View style={styles.optionContainer}>
            <Text style={{fontSize: 18}}>+</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
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

export default CartItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    width: wp("90%"),
    height: hp(15),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingLeft: 20
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 10,
    backgroundColor: COLORS.gray,
    width: wp(25),
    height: hp(12),
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    height: hp(9),
    width: wp(10),
  },
  itemInfo: {
    gap: 4
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
  stock: {
    fontSize: 12,
    color: COLORS.gray
  },
  price: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: "Roboto-Bold"
  },
  quantityUpdateContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray,
    justifyContent: 'space-evenly',
    height: hp(4),
    borderRadius: 5
  },
  quantityContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.gray,
    width: wp(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16
  },
  optionContainer: {
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center'
  }
});