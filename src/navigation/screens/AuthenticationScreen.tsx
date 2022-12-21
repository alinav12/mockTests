import {StackActions, useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import FaceIdComponent from '../../components/faceid/FaceIdComponent';
import SignInComponent from '../../components/signin/SignInComponents';

const AuthenticationScreen = () => {
  const navigation = useNavigation();
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
          //   navigation.navigate('PublicStack', {
          //     screen: 'PublicScreen',
          //   });
          navigation.dispatch(
            StackActions.replace('PublicStack', {
              screen: 'PublicScreen',
            }),
          );
        }}>
        <Text style={{color: '#710ce3', fontSize: 16}}>Enter as a guest</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationScreen;
