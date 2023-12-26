/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useStorage} from '../storage/Storage';
import {USER} from '../constants';
import Toast from 'react-native-simple-toast';

export const UserRegistration = async payload => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/auth/register`,
      payload,
    );
    console.log(payload);
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const UserLogin = async payload => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/auth/login`,
      payload,
    );
    console.log(payload);
    await useStorage.setItem(USER.ACCESS_TOKEN, response.data.token);
    await useStorage.setItem(
      USER.USER_DATA,
      JSON.stringify(response.data.user),
    );
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const FetchProfile = async () => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get(`http://localhost:8000/api/profile`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const UpdateProfile = async (payload) => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      `http://localhost:8000/api/profile/update`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    await useStorage.setItem(USER.USER_DATA, JSON.stringify(response.data));
    Toast.showWithGravity('Successfully Updated', Toast.LONG, Toast.CENTER);
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const ChangePassword = async payload => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      `http://localhost:8000/api/auth/change-password`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.showWithGravity(response.data.message, Toast.LONG, Toast.CENTER);
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const ForgotPassword = async payload => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      `${process.env.REACT_APP_API_LOCAL_URL}/forgot-password-otp`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.showWithGravity(response.data.message, Toast.LONG, Toast.CENTER);
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const ResetPassword = async payload => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      `${process.env.REACT_APP_API_LOCAL_URL}/reset-password-otp`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.showWithGravity(response.data.message, Toast.LONG, Toast.CENTER);
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};
