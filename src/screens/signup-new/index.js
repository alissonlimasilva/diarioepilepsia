import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';
import { mostrarAviso } from '../../util/messages';
import { convertMessage } from '../../util/firebase-util';
import RoundedButton from '../../components/button/rounded';
import InputIcon from '../../components/textinput/icon-input';
import { BackLogin } from '../../components/button/login-signup';

const BACKGROUND = require('../../../assets/images/background/signup.png');

const Login = props => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [name, setName] = useState('');
  const [makeSignup, setMakeSignup] = useState(false);
  const [fieldEmpty, setFieldEmpty] = useState(true);
  const [phone, setPhone] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [photo, setPhoto] = useState(
    'https://firebasestorage.googleapis.com/v0/b/diario-epilepsia.appspot.com/o/perfil.jpeg?alt=media&token=20159b02-13b5-437e-bf0b-00ad0e01ae29'
  );

  const checkEmptyFields = () => {
    if (login && senha && name) {
      setFieldEmpty(false);
    } else {
      setFieldEmpty(true);
    }
  };

  useEffect(checkEmptyFields, [login, senha, name]);

  const saveDadosFirestore = user => {
    const data = {
      email: login,
      name,
      phone,
      photo,
    };
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('data')
      .doc('account')
      .set(data)
      .then(() => {
        mostrarAviso({
          message: 'Usuário salvo com sucesso',
          type: 'success',
          icon: 'danger',
        });
        props.navigation.goBack();
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
        setMakeSignup(false); // para a animação de loading
        setFieldEmpty(false); // ativa botão
      });
  };

  const signUp = () => {
    setMakeSignup(true); // para a animação de loading
    setFieldEmpty(true); // desativa botão
    firebase
      .auth()
      .createUserWithEmailAndPassword(login, senha)
      .then(data => {
        JSON.stringify('Novo usuario', data);
        saveDadosFirestore(data.user);
      })
      .catch(error => {
        console.log(' Erro ao criar usuário', JSON.stringify(error));
        mostrarAviso({
          message: convertMessage(error.code),
          type: 'danger',
          icon: 'danger',
        });
        setMakeSignup(false); // para a animação de loading
        setFieldEmpty(false); // ativa botão
      });
  };

  const loginInput = () => {
    return (
      <InputIcon
        style={styles.viewFieldLogin}
        value={login}
        editable={!makeSignup}
        placeholder="Email"
        icon="email-outline"
        onChangeText={setLogin}
        KeyboardType="email-address"
        blurOnSubmit={false}
      />
    );
  };

  const passwordInput = () => {
    return (
      <InputIcon
        style={styles.viewFieldSenha}
        value={senha}
        editable={!makeSignup}
        onChangeText={setSenha}
        icon="lock"
        secureTextEntry
        blurOnSubmit={false}
        placeholder="Senha"
      />
    );
  };

  const phoneInput = () => {
    return (
      <InputIcon
        value={phone}
        editable={!makeSignup}
        onChangeText={setPhone}
        icon="phone"
        placeholder="Telefone"
      />
    );
  };

  const nameInput = () => {
    return (
      <InputIcon
        value={name}
        editable={!makeSignup}
        onChangeText={setName}
        icon="account"
        placeholder="Nome"
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
        <BackLogin onPress={() => props.navigation.goBack()} />
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.viewCamposBotao}>
          <View style={{ flex: 1 }}>
            {loginInput()}
            {nameInput()}
            {phoneInput()}
            {passwordInput()}
          </View>
          <RoundedButton
            isLoading={makeSignup}
            onPress={signUp}
            disabled={fieldEmpty}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
