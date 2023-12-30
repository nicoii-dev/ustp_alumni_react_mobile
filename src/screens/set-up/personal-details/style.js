/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import COLORS from '../../../config/constants/colors';

const OverlayStyle = StyleSheet.create({
  overlayStyle: {
    borderRadius: 20,
    position: 'absolute',
    height: heightPercentageToDP(40),
    width: '85%',
    top: heightPercentageToDP(30),
    alignItems: 'center',
  },
  container: {
    bottom: 15,
    position: 'absolute',
  },
  titleContainer: {
    marginBottom: heightPercentageToDP(7),
  },
  titleText: {
    padding: 10,
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.navyBlue,
  },
  messageContainer: {
    marginBottom: heightPercentageToDP(0),
    height: heightPercentageToDP(12),
    width: widthPercentageToDP('70%'),
  },
  messageText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});

export default OverlayStyle;
