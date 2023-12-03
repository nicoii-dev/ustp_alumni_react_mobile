/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

// redux
import {loadingStart, loadingFinish} from '../../../store/loader/reducers';

// components
import HeaderComponent from '../../../components/header/HeaderComponent';
import PersonalInfoComponent from '../../../components/screens/profile/personal-info/PersonalInfoComponent';
import ButtonComponent from '../../../components/input/Buttons/ButtonComponent';
import {changePasswordSchema} from '../../../library/yup-schema/changePasswordSchema';
import SecurityComponent from '../../../components/screens/profile/security/SecurityComponent';
import {useStorage} from '../../../library/storage/Storage';
import {USER} from '../../../library/contants';

// api
import {ChangePassword} from '../../../services/userApi';

const SecurityScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const defaultValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: defaultValues,
  });

  const getUserDetails = useCallback(async () => {
    const user = await useStorage.getItem(USER.USER_DATA);
    if (user) {
      setEmail(JSON.parse(user).email);
    }
  }, []);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  console.log(email);
  const onSubmit = async data => {
    dispatch(loadingStart());
    const payload = {
      email: email,
      current_password: data.currentPassword,
      new_password: data.newPassword,
    };
    const response = await ChangePassword(payload);
    if (!_.isUndefined(response)) {navigation.navigate('ProfileScreen');}
    dispatch(loadingFinish());
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
      }}>
      <HeaderComponent>
        <Icon
          name={'arrow-back'}
          size={30}
          color={'white'}
          style={{position: 'absolute', left: 30}}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
            }}>
            Security
          </Text>
        </View>
      </HeaderComponent>
      <View style={{marginTop: 10, width: '100%'}}>
        <SecurityComponent control={control} errors={errors} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '100%',
          bottom: 50,
          position: 'absolute',
        }}>
        <ButtonComponent
          onPress={handleSubmit(onSubmit)}
          color="#2C74B3"
          size="lg"
          styles={{width: '50%'}}>
          <Text style={{color: 'white', fontFamily: 'Manrope-Bold'}}>
            Update
          </Text>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default SecurityScreen;
