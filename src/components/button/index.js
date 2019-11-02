import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import colors from '../../res/colors';

const Button = ({onPress, title, style = {}, textStyle = {}, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    margin: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },
});
