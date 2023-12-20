/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useStorage } from '../storage/Storage';
import { USER } from '../constants';
import Toast from 'react-native-simple-toast';

export const FetchAllAchievements = async () => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get(`http://localhost:8000/api/achievements`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response)
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const CreateAchievement = async payload => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `http://localhost:8000/api/achievements/create`,
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

export const FetchAchievement = async id => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `http://localhost:8000/api/achievements/view/${id}`,
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

export const UpdateAchievement = async (payload, id) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `http://localhost:8000/api/achievements/update/${id}`,
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

export const DeleteAchievement = async (id) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.delete(
      `http://localhost:8000/api/achievements/delete/${id}`,
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
