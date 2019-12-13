import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Spinner from 'react-native-spinkit';

const ButtonLogin = ({
  loading = false,
  ativo = false,
  onPress = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!ativo}
      style={[styles.button, {backgroundColor: ativo ? 'blue' : 'gray'}]}>
      {loading ? (
        <Spinner color="white" size={40} type={'Bounce'} />
      ) : (
        <Icon style={styles.iconButton} name="arrow-right" />
      )}
    </TouchableOpacity>
  );
};

const ButtonRegistrar = ({onPress = () => {}, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.registrar}>
      <Text style={styles.textRegistro}>Registro</Text>
    </TouchableOpacity>
  );
};

export {ButtonRegistrar, ButtonLogin};
