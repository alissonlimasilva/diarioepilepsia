import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import styles from './styles';
import {ButtonLogin, ButtonRegistrar, ButtonVoltarLogin} from './Buttons';
import {InputLogin, InputSenha, InputNome, InputPhone} from './Inputs';
import {ROTAS} from '../../constants';
import firebase from 'react-native-firebase';
import {mostrarAviso} from '../../util/messages';
import {convertMessage} from '../../util/firebase-util';

const BACKGROUND = require('./background.png');

const Login = props => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [logando, setLogando] = useState(false);
  const [fieldEmpty, setFieldEmpty] = useState(true);
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(
    'https://firebasestorage.googleapis.com/v0/b/diario-epilepsia.appspot.com/o/perfil.jpeg?alt=media&token=20159b02-13b5-437e-bf0b-00ad0e01ae29',
  );

  const checkEmptyFields = () => {
    if (login && senha && nome) {
      setFieldEmpty(false);
    } else {
      setFieldEmpty(true);
    }
  };

  useEffect(checkEmptyFields, [login, senha, nome]);

  const signUp = () => {
    setLogando(true); //para a animação de loading
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
        setLogando(false); //para a animação de loading
        setFieldEmpty(false); // ativa botão
      });
  };
  const saveDadosFirestore = user => {
    const data = {
      email: login,
      name: nome,
      phone: phone,
      photo: photo,
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
        setLogando(false); //para a animação de loading
        setFieldEmpty(false); // ativa botão
      });
  };

  const handleLogin = text => setLogin(text);
  const handleSenha = text => setSenha(text);
  const handleNome = text => setNome(text);
  const handlePhone = text => setPhone(text);

  return (
    <ImageBackground
      source={BACKGROUND}
      style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ButtonVoltarLogin onPress={() => props.navigation.goBack()} />
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.viewCamposBotao}>
          <View style={{flex: 1}}>
            <InputLogin
              editable={!logando}
              value={login}
              onChangeText={handleLogin}
            />
            <InputNome
              editable={!logando}
              value={nome}
              onChangeText={handleNome}
            />
            <InputPhone
              editable={!logando}
              value={phone}
              onChangeText={handlePhone}
            />
            <InputSenha
              editable={!logando}
              value={senha}
              onChangeText={handleSenha}
            />
          </View>
          <ButtonLogin loading={logando} onPress={signUp} ativo={!fieldEmpty} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
