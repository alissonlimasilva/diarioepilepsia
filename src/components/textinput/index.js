import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

const Input = ({state, onChangeText, title, icon, ...props}) => {
  return (
    <Fumi
      label={title}
      iconClass={FontAwesomeIcon}
      iconName={icon}
      iconColor={'#f95a25'}
      iconSize={20}
      iconWidth={40}
      inputPadding={16}
      onChangeText={text => onChangeText(state, text)}
    />
  );
};

export default Input;
