import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-spinkit';

import styles from './styles';

const RoundedButton = ({
  isLoading = false,
  disabled = false,
  onPress = () => {},
  icon = 'arrow-right',
  style = {},
  iconStyle = {},
  spinnerSize = 40,
  spinnerColor = 'white',
  spinnerType = 'Bounce',
}) => {
  const spinnerView = () => (
    <Spinner color={spinnerColor} size={spinnerSize} type={spinnerType} />
  );

  const iconView = () => <Icon style={[styles.icon, iconStyle]} name={icon} />;

  const styleDisable = disabled ? { backgroundColor: 'gray' } : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style, styleDisable]}
    >
      {isLoading ? spinnerView() : iconView()}
    </TouchableOpacity>
  );
};

export default RoundedButton;
