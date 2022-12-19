import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const PublicScreen = React.lazy(() => import('../screens/PublicScreen'));

const Stack = createNativeStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={PublicScreen} name="PublicScreen" />
    </Stack.Navigator>
  );
};

export default PublicStack;
