import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const LoaderComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default LoaderComponent;
