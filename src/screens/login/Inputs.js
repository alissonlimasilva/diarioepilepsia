import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const InputLogin = ({ editable = true, value = '', onChangeText }) => {
  return (
    <View style={[styles.inputs, styles.viewFieldLogin]}>
      <Icon style={styles.icon} name="account" />
      <TextInput
        keyboardType="email-address"
        value={value}
        blurOnSubmit={false}
        onChangeText={onChangeText}
        style={styles.inputLogin}
        placeholder="Usuário"
        editable={editable}
      />
    </View>
  );
};
const InputSenha = ({
  editable = true,
  value = '',
  onChangeText,
  onKeyboardPress = () => {},
}) => {
  return (
    <View style={[styles.inputs, styles.viewFieldSenha]}>
      <Icon style={styles.icon} name="lock" />
      <TextInput
        value={value}
        secureTextEntry
        onChangeText={onChangeText}
        style={styles.inputSenha}
        placeholder="Senha"
        returnKeyType="search"
        onSubmitEditing={onKeyboardPress}
        editable={editable}
      />
    </View>
  );
};

export { InputLogin, InputSenha };
