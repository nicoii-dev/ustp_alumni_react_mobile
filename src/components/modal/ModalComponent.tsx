import React from 'react';
import {Modal, View} from 'react-native';

// styles
import ModalStyles from './modal-style';

const ModalComponent = (props: any) => {
  console.log(props.height)
  return (
      <Modal animationType="fade" transparent={true} visible={props.showModal}>
        <View style={ModalStyles.centeredView}>
          <View style={[ModalStyles.modalView, {height: props.height}]}>
            {props.children}
          </View>
        </View>
      </Modal>
  );
};

export default ModalComponent;

