import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


import COLORS from '../../../config/constants/colors';

// styles
import ModalStyles from './modal-style';

interface successPromptInferface {
  showModal: boolean;
  setShowModal: Function;
  message: string;
}

const SuccessPrompt = (props: successPromptInferface) => {

  return (
    <Modal animationType="fade" transparent={true} visible={props.showModal}>
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          <View style={{ alignItems: 'center', gap: 10 }}>
            <View style={{ borderRadius: 50, height: hp(6), width: hp(6), backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name={'check'} size={30} style={{ color: COLORS.darkGray }} />
            </View>
            <View>
              <Text style={{ textAlign: 'center', color: COLORS.white, fontFamily: "Roboto-Regular", fontSize: 20 }}>
                {props.message}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessPrompt;

