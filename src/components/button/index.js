import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import colors from '../../res/colors';

const Button = ({onPress, title, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },
});
