import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';
import { ROTAS } from '../../constants';
import { mostrarAviso } from '../../util/messages';
import { convertMessage } from '../../util/firebase-util';
import RoundedButton from '../../components/button/rounded';
import InputIcon from '../../components/textinput/icon-input';
import { SignupButton } from '../../components/button/login-signup';

const BACKGROUND = require('../../../assets/images/background/login.png');

const Login = props => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [logando, setLogando] = useState(false);
  const [fieldEmpty, setFieldEmpty] = useState(true);

  const checkEmptyFields = () => {
    if (login && senha) {
      setFieldEmpty(false);
    } else {
      setFieldEmpty(true);
    }
  };

  useEffect(checkEmptyFields, [login, senha]);

  const chamarMain = () => {
    props.navigation.navigate(ROTAS.main);
  };

  const logar = () => {
    setLogando(true); // para a animação de loading
    setFieldEmpty(true); // desativa botão
    firebase
      .auth()
      .signInWithEmailAndPassword(login, senha)
      .then(() => {
        chamarMain(); // chamar o Dashboard
      })
      .catch(error => {
        console.log(error);
        mostrarAviso({
          message: convertMessage(error.code),
          type: 'danger',
          icon: 'danger',
        });
      })
      .finally(() => {
        setLogando(false); // para a animação de loading
        setFieldEmpty(false); // ativa botão
      });
  };

  const chamarCadastrar = () => {
    props.navigation.navigate(ROTAS.cadastro);
  };

  const loginField = () => {
    return (
      <InputIcon
        style={styles.viewFieldLogin}
        value={login}
        editable={!logando}
        placeholder="Email"
        icon="account"
        onChangeText={setLogin}
        KeyboardType="email-address"
        blurOnSubmit={false}
      />
    );
  };

  const passwordField = () => {
    return (
      <InputIcon
        style={styles.viewFieldSenha}
        value={senha}
        editable={!logando}
        onChangeText={setSenha}
        icon="lock"
        secureTextEntry
        blurOnSubmit={false}
        placeholder="Senha"
        returnKeyType="search"
        onSubmitEditing={logar}
      />
    );
  };

  return (
    <ImageBackground
      source={BACKGROUND}
      style={{ flex: 1, width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Text style={styles.title}>Login</Text>
        <View style={styles.viewCamposBotao}>
          <View style={{ flex: 1 }}>
            {loginField()}
            {passwordField()}
          </View>
          <RoundedButton
            isLoading={logando}
            onPress={logar}
            disabled={fieldEmpty}
          />
        </View>
        <SignupButton onPress={chamarCadastrar} />
      </View>
    </ImageBackground>
  );
};

export default Login;
