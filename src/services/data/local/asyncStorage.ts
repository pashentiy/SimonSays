import AsyncStorage from '@react-native-async-storage/async-storage';

export const SCORE_LIST = 'SCORE_LIST';


export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return error;
  }
};

export const retrieveData = async (key: string, defaultValue: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return defaultValue;
    }
  } catch (error) {
    return error;
  }
};
