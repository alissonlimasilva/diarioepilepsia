import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    elevation: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderLeftWidth: 0,
  },
  icon: {
    marginLeft: 20,
    fontSize: 22,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 20,
    borderBottomRightRadius: 50,
  },
});
