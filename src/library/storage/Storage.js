import AsyncStorage from '@react-native-community/async-storage';

const useStorage = {
  setItem: async (key, value, fn = null) => {
    try {
      if (typeof fn !== 'function') {
        fn = () => {};
      }
      return await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log({'`Storage Util Error\nSet Item`': e});
    }
  },
  getItem: async (key, fn = null) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log({'`Storage Util Error\nGet Item:`': e});
    }
  },
  removeItem: async (key, fn = null) => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log({'`Storage Util Error.\nRemove Item:`': e});
    }
  },
  multiRemove: async (keys = [], fn = null) => {
    try {
      return await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log({'`Storage Util Error.\nMulti Remove Item:`': e});
    }
  },
  multiGet: async (keys = [], fn = null) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log({'`Storage Util Error.Multi Get Item:`': e});
    }
  },
};

export {useStorage};
