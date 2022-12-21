import {StackActions, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import styles from './styles';

const FaceIdComponent = () => {
  const navigation = useNavigation();
  const handleFaceId = useCallback(async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    rnBiometrics
      .simplePrompt({promptMessage: 'Verify the identity'})
      .then(resultObject => {
        const {success} = resultObject;
        if (success) {
          console.log('successful biometrics provided');
          // navigation.navigate('PrivateStack', {
          //   screen: 'PrivateScreen',
          // });
          navigation.dispatch(
            StackActions.replace('PrivateStack', {
              screen: 'PrivateScreen',
            }),
          );
          // setIsUserVerified(true);
        } else {
          console.log('user cancelled biometric prompt');
          // setIsUserVerified(false);
        }
      })
      .catch(() => {
        console.log('biometrics failed');
        // setIsUserVerified(false);
      });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={handleFaceId}>
      <Text style={styles.text}>Or use Face ID for authentification</Text>
    </TouchableOpacity>
  );
};

export default FaceIdComponent;
