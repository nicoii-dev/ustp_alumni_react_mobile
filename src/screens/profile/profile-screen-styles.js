import {StyleSheet} from 'react-native';
import {
  // heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import COLORS from '../../config/constants/colors';

const ProfileScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0A2647',
  },
  accountSettingsContainer: {
    marginTop: 20,
    alignSelf: 'flex-start',
    padding: wp(5),
    paddingBottom: 0,
  },
  accountSettingsText: {
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
    color: COLORS.navyBlue,
  },
  personalContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  personalText: {
    fontSize: 16,
    paddingRight: wp(20),
    fontFamily: 'Manrope-Regular',
    color: COLORS.navyBlue,
  },
  securityContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    width: '100%',
  },
  securityText: {
    fontSize: 16,
    paddingRight: wp(20),
    fontFamily: 'Manrope-Regular',
    color: COLORS.navyBlue,
  },
  icon: {
    flex: 1,
    textAlign: 'right',
  },
});

export default ProfileScreenStyle;
