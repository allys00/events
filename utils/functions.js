import { AsyncStorage } from 'react-native';

export const getAuthorizationHeader = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return { token }
}