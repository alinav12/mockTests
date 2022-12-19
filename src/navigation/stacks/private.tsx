import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const PrivateScreen = React.lazy(() => import('../screens/PrivateScreen'));

const Stack = createNativeStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={PrivateScreen} name="UserScreen" />
    </Stack.Navigator>
  );
};

export default PrivateStack;
