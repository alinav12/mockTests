import React from 'react';
import {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSelector} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';

const PrivateScreen = ({defaultValue = 'Hello world'}) => {
  const [value, setValue] = useState(defaultValue);
  const debounced = useDebouncedCallback(value => {
    setValue(value);
  }, 1000);

  const user: UserState = useSelector((state: UserState) => {
    return state;
  });

  useEffect(() => {
    saveToken();
  }, []);

  const saveToken = async () => {
    try {
      await EncryptedStorage.setItem('user_token', user?.user?.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'flex-start', padding: 20}}>
      <Text>Private Screen</Text>
      <TextInput
        accessibilityLabel="user-input"
        defaultValue={defaultValue}
        onChangeText={text => debounced(text)}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderStyle: 'solid',
          padding: 10,
          marginVertical: 30,
          width: '80%',
        }}
      />
      <Text testID="input-text">{value}</Text>
    </View>
  );
};

export default PrivateScreen;
