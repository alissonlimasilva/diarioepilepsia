import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  signup: {
    marginTop: 50,
    padding: 10,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderColor: 'red',
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    elevation: 15,
    width: '30%',
    borderTopRightRadius: 20,
  },
  backLogin: {
    padding: 10,
    borderWidth: 3,
    borderRightWidth: 0,
    borderColor: 'blue',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    elevation: 15,
    alignSelf: 'flex-end',
    marginBottom: 20,
    width: '40%',
    borderTopLeftRadius: 20,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
  textSignup: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
  },
});
