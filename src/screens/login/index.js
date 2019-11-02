import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import firebase from 'react-native-firebase';
import styles from './styles';
import Input from '../../components/textinput';
import Button from '../../components/button';
import colors from '../../res/colors';
import {mostrarAviso} from '../../util/messages';
import {convertMessage} from '../../util/firebase-util';
const logo = require('../../res/img/logo/logo_login.jpg');

export default class Login extends React.Component {
  state = {
    login: '',
    senha: '',
    showButtonLogin: false,
  };

  handleTextInput = (state, value) => {
    this.setState({[state]: value}, this.checkIfFieldsAreEmpty);
  };

  checkIfFieldsAreEmpty = () => {
    const {login, senha} = this.state;
    console.log(login, senha);
    if (login && senha) return this.setState({showButtonLogin: true});
    this.setState({
      showButtonLogin: false,
    });
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;
    if (user) this.callMain();
  }

  renderFieldPassword() {
    return (
      <Input
        title="Senha"
        icon="lock"
        secureTextEntry={true}
        onChangeText={this.handleTextInput}
        state="senha"
      />
    );
  }

  renderFieldLogin() {
    return (
      <Input
        title="Login"
        icon="user"
        onChangeText={this.handleTextInput}
        state="login"
      />
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.containner}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={styles.loginView}>
          <Image style={styles.logo} source={logo} />
        </View>
        {this.renderFieldLogin()}
        {this.renderFieldPassword()}
        {this.buttonLogin()}
        {this.buttonSignUp()}
      </KeyboardAwareScrollView>
    );
  }

  buttonLogin() {
    return <Button title="Entrar" onPress={this.doLogin} />;
  }

  buttonSignUp() {
    return (
      <Button
        title="Cadastrar"
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: colors.primary,
        }}
        textStyle={{color: colors.primary}}
        onPress={() => this.props.navigation.navigate('SignUp')}
      />
    );
  }

  doLogin = () => {
    const {login, senha, showButtonLogin} = this.state;
    if (!showButtonLogin) {
      mostrarAviso({
        message: 'Login e senha precisam estar preenchidos',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(login, senha)
      .then(data => {
        this.callMain();
      })
      .catch(error => {
        console.log(error);
        mostrarAviso({
          message: convertMessage(error.code),
          type: 'danger',
          icon: 'danger',
        });
      });
  };

  callMain = () => {
    const {navigation} = this.props;
    navigation.navigate('Main');
  };
}
