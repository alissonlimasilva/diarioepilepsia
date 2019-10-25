import React from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';
const avatar = require('../../res/img/account/default-avatar.jpg');
const {width} = Dimensions.get('window');
const size = width * 0.4;

const FotoPerfil = ({source = avatar, onPress, ...props}) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={source} defaultSource={source} />
    </View>
  );
};

export default FotoPerfil;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: size,
    height: size,
    borderRadius: size / 2,
  },
  view: {
    alignSelf: 'center',
    width: size,
    height: size,
    elevation: 20,
    borderRadius: size / 2,
  },
});
