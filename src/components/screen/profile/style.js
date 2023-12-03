/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const OverlayStyle = StyleSheet.create({
  overlayStyle: {
    borderRadius: 20,
    position: 'absolute',
    height: heightPercentageToDP(30),
    width: '85%',
    top: heightPercentageToDP(30),
    alignItems: 'center',
  },
  container: {
    bottom: 15,
    position: 'absolute',
  },
  titleContainer: {
    marginBottom: heightPercentageToDP(2),
  },
  titleText: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 20,
    textAlign: 'center',
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
