import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const InputLogin = ({editable = true, value = '', onChangeText, ...props}) => {
  return (
    <View style={[styles.inputs, styles.viewFieldLogin]}>
      <Icon style={styles.icon} name="at" />
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
const InputSenha = ({editable = true, value = '', onChangeText, ...props}) => {
  return (
    <View style={[styles.inputs, styles.viewFieldSenha]}>
      <Icon style={styles.icon} name="lock" />
      <TextInput
        value={value}
        secureTextEntry={true}
        onChangeText={onChangeText}
        style={styles.inputSenha}
        placeholder="Senha"
        editable={editable}
      />
    </View>
  );
};

const InputNome = ({editable = true, value = '', onChangeText, ...props}) => {
  return (
    <View style={[styles.inputs, styles.viewFieldNome]}>
      <Icon style={styles.icon} name="account" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputSenha}
        placeholder="Nome"
        editable={editable}
      />
    </View>
  );
};

const InputPhone = ({editable = true, value = '', onChangeText, ...props}) => {
  return (
    <View style={[styles.inputs, styles.viewFieldNome]}>
      <Icon style={styles.icon} name="phone" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputSenha}
        placeholder="Telefone"
        editable={editable}
      />
    </View>
  );
};

export {InputLogin, InputSenha, InputNome, InputPhone};
