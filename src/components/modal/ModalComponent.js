/* eslint-disable react/prop-types */
import React, {useState, useEffect, useCallback} from 'react';
import {Modal, View, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// styles
import ModalStyles from './modal-style';

const ModalComponent = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showModal}
      onRequestClose={() => props.setShowModal(false)}>
      <View style={ModalStyles.centeredView}>
        <View style={[ModalStyles.modalView, {height: props.height}]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
