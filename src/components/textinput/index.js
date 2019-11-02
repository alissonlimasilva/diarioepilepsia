import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import colors from '../../res/colors';

const Input = ({
  state,
  secureTextEntry = false,
  error = false,
  onChangeText,
  title,
  icon,
  ...props
}) => {
  return (
    <Fumi
      label={title}
      iconClass={FontAwesomeIcon}
      iconName={icon}
      iconColor={colors.primary}
      iconSize={20}
      iconWidth={40}
      secureTextEntry={secureTextEntry}
      inputPadding={16}
      inputStyle={[
        styles.inputStyleError,
        {
          borderColor: error ? 'red' : 'transparent',
        },
      ]}
      autoCapitalize="none"
      onChangeText={text => onChangeText(state, text)}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {},
  inputStyleError: {
    borderBottomWidth: 2,
    marginRight: 10,
  },
});

export default Input;
