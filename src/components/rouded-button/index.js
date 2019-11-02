import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

const RoudedButton = ({onPress, selected, color, tipo, ...props}) => {
  console.log(tipo, selected);
  return (
    <TouchableOpacity onPress={() => onPress(tipo)}>
      <View
        style={[
          styles.button,
          {backgroundColor: color, opacity: selected ? 0.2 : 1},
        ]}
      />
    </TouchableOpacity>
  );
};

export default RoudedButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    borderColor: 'blue',
    height: 50,
    borderRadius: 25,
  },
});
