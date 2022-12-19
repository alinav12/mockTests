import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    width: '70%',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  button: {
    backgroundColor: '#710ce3',
    padding: 10,
    width: '70%',
    alignItems: 'center',
    marginTop: 30,
  },
  error: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 14,
    padding: 10,
    marginTop: 30,
  },
});
