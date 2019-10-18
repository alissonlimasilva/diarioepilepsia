import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import firebase from 'react-native-firebase';
import styles from './styles';
import Input from '../../components/textinput';
import {ScrollView} from 'react-native-gesture-handler';
const logo = require('../../res/img/logo/logo_login.png');

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

  renderFieldPassword() {
    return (
      <Input
        title="Senha"
        icon="lock"
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
      <View style={styles.containner}>
        <View style={styles.loginView}>
          <Image style={styles.logo} source={logo} />
        </View>
        <ScrollView style={styles.fields}>
          {this.renderFieldLogin()}
          {this.renderFieldPassword()}
          {this.buttonLogin()}
        </ScrollView>
      </View>
    );
  }

  buttonLogin() {
    const {showButtonLogin} = this.state;
    if (!showButtonLogin) return null;
    return (
      <TouchableOpacity onPress={this.doLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    );
  }

  doLogin = () => {
    const {login, senha} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(login, senha)
      .then(data => {
        const {navigation} = this.props;
        navigation.navigate('Main');
      })
      .catch(error => {
        alert(error);
      });
  };
}
