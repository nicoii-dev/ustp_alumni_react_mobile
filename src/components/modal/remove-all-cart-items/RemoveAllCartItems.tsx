import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


import COLORS from '../../../config/constants/colors';

// styles
import ModalStyles from './modal-style';

interface removeAllInterface {
    showModal: boolean;
    setShowModal: Function;
    confirm: Function
    cart: Array<Object>
}

const RemoveAllCartItems = (props: removeAllInterface) => {

  return (
      <Modal animationType="fade" transparent={true} visible={props.showModal}>
        <View style={ModalStyles.centeredView}>
          <View style={ModalStyles.modalView}>
          <View style={{ alignItems: 'center', gap: 10 }}>
          <View style={{ borderRadius: 50, height: hp(5), width: hp(5), backgroundColor: COLORS.yellow, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={'help-outline'} size={30} style={{ color: COLORS.white }} />
          </View>
          <View>
            <Text style={{ textAlign: 'center', color: "black", fontFamily: "Roboto-Medium", fontSize: 16 }}>
              {`Are you sure you want to delete this ${props.cart.length} item(s) from cart?`}
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 20, gap: 10}}>
            <TouchableOpacity onPress={() => props.setShowModal(false)}>
              <View style={{ 
                borderRadius: 10, 
                borderWidth: 1, 
                borderColor: COLORS.red, 
                padding: 10,
                width: wp(30),
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Text style={{color: COLORS.red, fontFamily: "Roboto-Bold"}}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.confirm()}>
              <View style={{ 
                borderRadius: 10, 
                borderWidth: 1, 
                backgroundColor: COLORS.black, 
                padding: 10,
                width: wp(30),
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Text style={{color: COLORS.white, fontFamily: "Roboto-Bold"}}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          </View>
        </View>
      </Modal>
  );
};

export default RemoveAllCartItems;

