import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    padding: 20,
    flex: 1,
  },
  nome: {
    fontSize: 24,
    padding: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  titleField: {
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  valueField: {
    paddingTop: 5,
    fontSize: 16,
  },
  separator: {backgroundColor: 'gray', borderWidth: 0.1, marginTop: 10},
  logout: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
