import {StackActions} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {userLogin} from '../../api/login';
import {loginUser} from '../../redux/actionCreators';
import styles from './styles';

const SignInComponent = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user: UserState = useSelector((state: UserState) => {
    return state;
  });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (user.user.token) {
      // navigation.navigate('PrivateStack', {
      //   screen: 'PrivateScreen',
      // });
      navigation.dispatch(
        StackActions.replace('PrivateStack', {
          screen: 'PrivateScreen',
        }),
      );
    }
  }, [dispatch, user]);

  const onSubmit = () => {
    // if (login.length < 5 || password.length < 5) {
    //   Alert.alert('', 'Field length must be more than 5 symbols!', [
    //     {text: 'OK!'},
    //   ]);
    //   return;
    // }

    dispatch(
      loginUser({
        login,
        password,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setLogin}
        value={login}
        placeholder="Enter your email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
      {user.error && <Text style={styles.error}>{user.error}</Text>}
      {user.loading && <ActivityIndicator />}
    </View>
  );
};

export default SignInComponent;
