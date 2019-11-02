import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../res/colors';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  containner: {flex: 1},
  loginView: {
    height: height * 0.4,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: height * 0.25,
    resizeMode: 'contain',
  },
  fields: {
    backgroundColor: 'white',
    borderRadius: 20,
    // position: 'absolute',
    // top: height * 0.35,
    // bottom: 10,
    // left: 10,
    // right: 10,
    elevation: 30,
  },
});
