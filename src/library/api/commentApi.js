/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useStorage} from '../storage/Storage';
import {USER} from '../constants';
import Toast from 'react-native-simple-toast';

export const FetchAllComments = async id => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/comment/view${id}`,
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

export const CreateComment = async payload => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/comment/create/`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
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

export const UpdateComment = async (id, payload) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `https://ustpalumnilaravelapi-production.up.railway.app/api/comment/update/${id}`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    // Toast.showWithGravity(
    //   error.response.data.message,
    //   Toast.LONG,
    //   Toast.CENTER,
    // );
  }
};

export const DeletePost = async id => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `https://ustpalumnilaravelapi-production.up.railway.app/violator-citationlist/${id}`,
      {},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
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
