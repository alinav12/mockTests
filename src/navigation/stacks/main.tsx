import React, {Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';

// const InitialScreen = React.lazy(() => import('../screens/InitialScreen'));
import InitialScreen from '../screens/InitialScreen';
import EncryptedStorage from 'react-native-encrypted-storage';
const PublicStack = React.lazy(() => import('./public'));
const PrivateStack = React.lazy(() => import('./private'));

const Stack = createNativeStackNavigator();

const MainStack = (isLoggedIn: boolean) => {
  isLoggedIn = false;
  if (isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={PrivateStack}
          name="PrivateStack"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen component={InitialScreen} name="InitialScreen" />
        <Stack.Screen
          component={PublicStack}
          name="PublicStack"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PrivateStack}
          name="PrivateStack"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
};

export default MainStack;
