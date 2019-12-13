import React from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';
const avatar = require('../../res/img/account/default-avatar.jpg');
const {width} = Dimensions.get('window');
const padrao = width * 0.4;

const FotoPerfil = ({source = avatar, onPress, size, ...props}) => {
  const tamanho = size ? size : padrao;
  return (
    <View
      style={[
        styles.view,
        {width: tamanho, height: tamanho, borderRadius: tamanho / 2},
      ]}>
      <Image
        style={[
          styles.image,
          {width: tamanho, height: tamanho, borderRadius: tamanho / 2},
        ]}
        source={source.uri ? source : avatar}
        defaultSource={source}
      />
    </View>
  );
};

export default FotoPerfil;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
  view: {
    alignSelf: 'center',
    elevation: 20,
  },
});
