import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const SIZE = 50;
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  viewIcon: {
    width: SIZE,
    height: SIZE,
    marginRight: 5,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.addButton,
  },
  desc: {
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 50 / 2,
  },
});
