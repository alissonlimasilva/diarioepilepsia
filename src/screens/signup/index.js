import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import firebase from 'react-native-firebase';
import styles from './styles';
import Input from '../../components/textinput';
import Button from '../../components/button';
import colors from '../../res/colors';
import {convertMessage} from '../../util/firebase-util';
import {mostrarAviso} from '../../util/messages';
const logo = require('../../res/img/logo/logo_login.jpg');

export default class SingUp extends React.Component {
  state = {
    email: '',
    phone: '',
    photo:
      'https://firebasestorage.googleapis.com/v0/b/diario-epilepsia.appspot.com/o/perfil.jpeg?alt=media&token=20159b02-13b5-437e-bf0b-00ad0e01ae29',
    errorEmail: false,
    errorSenha: false,
    errorNome: false,
    senha: '',
    nome: '',
    cadastroOk: false,
  };

  handleTextInput = (state, value) => {
    this.setState({[state]: value});
  };

  renderFieldPassword() {
    return (
      <Input
        title="Senha"
        icon="key"
        onChangeText={this.handleTextInput}
        state="senha"
        error={this.state.errorSenha}
      />
    );
  }

  renderFieldNome() {
    return (
      <Input
        title="Nome"
        icon="lock"
        onChangeText={this.handleTextInput}
        state="nome"
        error={this.state.errorNome}
      />
    );
  }

  renderFieldEmail() {
    return (
      <Input
        title="Email"
        icon="envelope-o"
        onChangeText={this.handleTextInput}
        state="email"
        error={this.state.errorEmail}
      />
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.containner}>
        {this.renderFieldEmail()}
        {this.renderFieldPassword()}
        {this.renderFieldNome()}
        {this.buttonSignUp()}
      </KeyboardAwareScrollView>
    );
  }

  buttonSignUp() {
    return <Button title="Criar novo usuário" onPress={this.doSignUp} />;
  }

  checkFields() {
    const {email, senha, nome} = this.state;
    const errors = {errorEmail: false, errorSenha: false, errorNome: false};
    let hasError = false;
    if (!email) {
      errors.errorEmail = true;
      hasError = true;
    }
    if (!senha) {
      errors.errorSenha = true;
      hasError = true;
    }
    if (!nome) {
      errors.errorNome = true;
      hasError = true;
    }

    return {hasError, errors};
  }

  doSignUp = () => {
    const isOk = this.checkFields();

    this.setState(isOk.errors);
    if (isOk.hasError) {
      mostrarAviso({
        message: 'Existem campos obrigatórios não preenchidos',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }

    const {email, senha} = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(data => {
        JSON.stringify('Novo usuario', data);
        this.saveDadosFirestore(data.user);
      })
      .catch(error => {
        console.log(' Erro ao criar usuário', JSON.stringify(error));
        mostrarAviso({
          message: convertMessage(error.code),
          type: 'danger',
          icon: 'danger',
        });
      });
  };

  saveDadosFirestore(user) {
    const {email, nome, phone, photo} = this.state;
    const data = {
      email,
      name: nome,
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
        this.callToLogin();
      })
      .catch(error => {
        console.log(error);
        mostrarAviso({
          message: convertMessage(error.code),
          type: 'danger',
          icon: 'danger',
        });
      });
  }

  callToLogin = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
}
