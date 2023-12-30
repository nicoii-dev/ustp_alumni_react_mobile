/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useStorage} from '../storage/Storage';
import {USER} from '../constants';
import Toast from 'react-native-simple-toast';

export const FetchTrainings = async () => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/training/user`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
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

export const CreateTraining = async payload => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/training/create`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('res', response)
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const FetchTraining = async id => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/training/view/${id}`,
      {},
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
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

export const UpdateTraining = async (payload, id) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/training/update/${id}`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
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

export const DeleteTraining = async (id) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.delete(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/training/delete/${id}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
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
