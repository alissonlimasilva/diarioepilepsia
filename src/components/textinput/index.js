import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import colors from '../../res/colors';

const Input = ({state, onChangeText, title, icon, ...props}) => {
  return (
    <Fumi
      label={title}
      iconClass={FontAwesomeIcon}
      iconName={icon}
      iconColor={colors.primary}
      iconSize={20}
      iconWidth={40}
      inputPadding={16}
      autoCapitalize="none"
      onChangeText={text => onChangeText(state, text)}
    />
  );
};

export default Input;
