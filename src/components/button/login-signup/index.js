import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const SignupButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signup}>
      <Text style={styles.textSignup}>Registro</Text>
    </TouchableOpacity>
  );
};

const BackLogin = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backLogin}>
      <Text style={styles.textLogin}>Voltar ao login</Text>
    </TouchableOpacity>
  );
};

export { SignupButton, BackLogin };
