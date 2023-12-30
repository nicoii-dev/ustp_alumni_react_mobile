/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const itemStyle = StyleSheet.create({
  viewContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 0,
    borderRadius: 10
  },
  itemName: {
    width: '30%',
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  itemData: {
    fontFamily: 'Manrope-Regular',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
});

export default itemStyle;
