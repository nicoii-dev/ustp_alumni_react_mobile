import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ProfileScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0A2647',
  },
  accountSettingsContainer: {
    alignSelf: 'flex-start',
    padding: wp(5),
  },
  accountSettingsText: {
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
    color: 'black',
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
    color: 'black',
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
    color: 'black',
  },
  icon: {
    flex: 1,
    textAlign: 'right',
  },
});

export default ProfileScreenStyle;
