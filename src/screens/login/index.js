import React from 'react';
import {View, StatusBar, Image, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import firebase from 'react-native-firebase';
import styles from './styles';
import Input from '../../components/textinput';
import Button from '../../components/button';
import colors from '../../res/colors';
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
      </KeyboardAwareScrollView>
    );
  }

  buttonLogin() {
    return <Button title="Entrar" onPress={this.doLogin} />;
  }

  doLogin = () => {
    const {login, senha, showButtonLogin} = this.state;
    if (!showButtonLogin) {
      Alert.alert('Atenção', 'Login e senha precisam estar preenchidos');
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(login, senha)
      .then(data => {
        this.callMain();
      })
      .catch(error => {
        Alert.alert('Atenção', error);
      });
  };

  callMain = () => {
    const {navigation} = this.props;
    navigation.navigate('Main');
  };
}
