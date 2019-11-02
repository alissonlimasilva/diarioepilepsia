import {showMessage} from 'react-native-flash-message';
import colors from '../res/colors';

export function mostrarAviso(options) {
  console.log(options);
  const messageDefault = {
    message: '',
    description: ' ',
    type: 'default',
    // backgroundColor: colors.primary, // background color
    color: 'white', // text color
  };
  showMessage(Object.assign(messageDefault, options));
}
