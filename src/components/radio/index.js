import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
const check = require('../../res/img/icons/check.png');
const uncheck = require('../../res/img/icons/uncheck.png');

const RadioBox = ({
  state = '',
  onPress = () => {},
  title = '',
  checked = false,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(!checked)}>
      <View style={styles.container}>
        <Image style={styles.icon} source={checked ? check : uncheck} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioBox;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
