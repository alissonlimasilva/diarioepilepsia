import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const InputIcon = ({
  editable = true,
  value = '',
  style = {},
  onChangeText = () => {},
  icon = '',
  inputStyle = {},
  placeholder = '',
  iconStyle = {},
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon style={[styles.icon, iconStyle]} name={icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        editable={editable}
        {...props}
      />
    </View>
  );
};

export default InputIcon;
