/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useStorage } from '../storage/Storage';
import { USER } from '../constants';
import Toast from 'react-native-simple-toast';

export const FetchAllAnnouncements = async () => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get(`https://ustpalumnilaravelapi-production.up.railway.app/api/announcement`, {
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
