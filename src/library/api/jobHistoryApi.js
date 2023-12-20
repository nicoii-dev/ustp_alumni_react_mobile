/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useStorage } from '../storage/Storage';
import { USER } from '../constants';
import Toast from 'react-native-simple-toast';

export const FetchAllJobHistory = async () => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get(`http://localhost:8000/api/job-history`, {
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

export const CreateJobHistory = async payload => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `http://localhost:8000/api/job-history/create`,
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

export const FetchJobHistory = async id => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `http://localhost:8000/api/job-history/view/${id}`,
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

export const UpdateJobHistory = async (payload, id) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.post(
      `http://localhost:8000/api/job-history/update/${id}`,
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

export const DeleteJobHistory = async (id) => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.delete(
      `http://localhost:8000/api/job-history/delete/${id}`,
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

