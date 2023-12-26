import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import _ from 'lodash';

import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {setupDetailsSchema} from '../../../library/yup-schema/setupDetails';
import {setPersonalDetails} from '../../../store/SetupProfileSlice';
import Header from '../../../components/header/Header';
import COLORS from '../../../config/constants/colors';
import UstpImages from '../../../config/images/ustp-images';
import TextInputController from '../../../components/input/text-input/TextInputController';
import DateInputController from '../../../components/input/DateInput/DateInputeController';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const SetupPersonal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [profilePic, setProfilePic] = useState([]);

  const defaultValues = {
    profilePic: '',
    civilStatus: '',
    dob: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(setupDetailsSchema),
    defaultValues: defaultValues,
  });

  const pickImage = async () => {
    launchImageLibrary({})
      .then(response => {
        let byte = 1048576; //1024 * 1024 byte conversion to mb binary
        if (response?.assets[0]?.fileSize / byte > 2) {
          return Toast.show('Image file size is too large.', Toast.SHORT);
        }
        if (response?.assets) {
          const file = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
            size: response.assets[0].fileSize,
          };
          setProfilePic({file: file, imageUrl: response.assets[0].uri});
        }
      })
      .catch(err => {
        console.log(err);
        // Here you handle if the user cancels or any other errors
      });
  };

  const onSubmit = async data => {
    if (_.isEmpty(profilePic)) {
      Toast.show('Upload a profile picture.', Toast.SHORT);
      return;
    }
    const formData = new FormData();
    formData.append('dob', data.dob);
    formData.append('civilStatus', data.civilStatus);
    formData.append('image', profilePic.file);
    console.log(formData);
    await dispatch(setPersonalDetails(formData));
    navigation.navigate('SetupEmploymentDetails');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
      }}>
      <Header>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: COLORS.navyBlue,
              textAlign: 'center',
            }}>
            Personal Details
          </Text>
        </View>
      </Header>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: heightPercentageToDP(8),
            marginBottom: heightPercentageToDP(4),
            position: 'relative',
          }}>
          <FastImage
            source={
              profilePic?.imageUrl
                ? {uri: profilePic?.imageUrl}
                : UstpImages.emptyLogo
            }
            style={{
              height: 150,
              width: 150,
              borderRadius: 200,
            }}
          />
          <Icon
            name={'insert-photo'}
            size={35}
            style={{
              borderRadius: 50,
              justifyContent: 'center',
              color: 'black',
              right: 5,
              top: 5,
              position: 'absolute',
            }}
            onPress={pickImage}
          />
        </View>

        <TextInputController
          headerTitle={'Civil Status'}
          control={control}
          name={'civilStatus'}
          placeholder={'Civil Status'}
          errorMessage={errors?.civilStatus?.message}
          errorStyle={{color: 'red'}}
        />
        <View style={{width: '100%'}}>
          <DateInputController
            headerTitle={'Date of Birth'}
            name={'dob'}
            control={control}
            errorMessage={errors?.dob?.message}
            display={'default'}
            mode={'date'}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 1,
          height: 70,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {/* <Pressable onPress={() => navigation.goBack()}>
          <View style={{marginRight: 30, width: 100, marginLeft: 50}}>
            <Text style={{color: 'black', fontFamily: 'Manrope-Bold'}}>
              Back
            </Text>
          </View>
        </Pressable> */}
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{
            marginRight: 30,
            width: 100,
            position: 'absolute',
            right: 0,
          }}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>Next</Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default SetupPersonal;
