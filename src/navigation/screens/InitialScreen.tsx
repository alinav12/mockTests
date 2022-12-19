import {Button, Text, TouchableOpacity, View} from 'react-native';

import SignInComponent from '../../components/signin/SignInComponents';
import FaceIdComponent from '../../components/faceid/FaceIdComponent';

const InitialScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SignInComponent navigation={navigation} />
      <FaceIdComponent />

      <TouchableOpacity
        style={{marginTop: 40}}
        onPress={() => {
          navigation.navigate('PublicStack', {
            screen: 'PublicScreen',
          });
        }}>
        <Text style={{color: '#710ce3', fontSize: 16}}>Enter as a guest</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialScreen;
