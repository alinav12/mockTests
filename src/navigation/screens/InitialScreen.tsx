import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SignInComponent from '../../components/signin/SignInComponents';
import FaceIdComponent from '../../components/faceid/FaceIdComponent';
import {StackActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

const InitialScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const initAppFlow = async () => {
      try {
        const token = await EncryptedStorage.getItem('user_token');

        if (!token) {
          throw new Error('Unauthorized user');
        }

        navigation.dispatch(
          StackActions.replace('PrivateStack', {
            screen: 'PrivateScreen',
          }),
        );
      } catch (error) {
        navigation.dispatch(StackActions.replace('AuthenticationScreen'));
      }
    };

    initAppFlow();
  }, [navigation]);

  return <ActivityIndicator />;
};

export default InitialScreen;
