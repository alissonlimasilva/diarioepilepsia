import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';
import { ButtonLogin, ButtonRegistrar } from './Buttons';
import { InputLogin, InputSenha } from './Inputs';
import { ROTAS } from '../../constants';
import { mostrarAviso } from '../../util/messages';
import { convertMessage } from '../../util/firebase-util';

const BACKGROUND = require('./background.png');

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

  const logar = () => {
    setLogando(true); // para a animação de loading
    setFieldEmpty(true); // desativa botão
    firebase
      .auth()
      .signInWithEmailAndPassword(login, senha)
      .then(data => {
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

  const chamarMain = () => {
    props.navigation.navigate(ROTAS.main);
  };

  const chamarCadastrar = () => {
    props.navigation.navigate(ROTAS.cadastro);
  };

  const handleLogin = text => setLogin(text);
  const handleSenha = text => setSenha(text);

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
            <InputLogin
              editable={!logando}
              value={login}
              onChangeText={handleLogin}
            />
            <InputSenha
              onKeyboardPress={logar}
              editable={!logando}
              value={senha}
              onChangeText={handleSenha}
            />
          </View>
          <ButtonLogin loading={logando} onPress={logar} ativo={!fieldEmpty} />
        </View>
        <ButtonRegistrar onPress={chamarCadastrar} />
      </View>
    </ImageBackground>
  );
};

export default Login;
