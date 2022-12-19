import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './stacks/main';
import EncryptedStorage from 'react-native-encrypted-storage';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getToken = async () => {
    try {
      const session = await EncryptedStorage.getItem('user_token');

      if (session !== undefined) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <NavigationContainer>
      <MainStack isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default Navigation;
