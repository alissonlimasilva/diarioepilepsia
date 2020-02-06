import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
    backgroundColor: colors.roundedButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: 'white',
  },
});
