import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StatusBar, ImageBackground} from 'react-native';
import FotoPerfil from '../../components/foto-user';
import styles from './styles';
import colors from '../../res/colors';
import UltimaCrise from './UltimaCrise';
import CrisesTotal from './TotalCrises';
import CrisesMes from './CrisesMes';
import CrisesSemana from './CrisesSemana';
import firebase from 'react-native-firebase';
const {width, height} = Dimensions.get('window');
const background = require('../../res/img/background/dashboard.png');
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/ducks/user';

const Dashboard = () => {
  const dispatch = useDispatch();
  const getUserdata = () => dispatch(Actions.requestUserdata());

  const [perfil, setPerfil] = useState('');
  useEffect(() => {
    getUserdata();
    getImagem();
  }, []);
  const viewNumeros = () => {
    return (
      <View
        style={{
          justifyContent: 'space-around',
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <CrisesSemana />
        <CrisesMes />
        <CrisesTotal />
      </View>
    );
  };

  const getImagem = () => {
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('data')
      .doc('account')
      .get()
      .then(snapshot => {
        const data = snapshot.data();
        console.log(data);
        if (data) {
          setPerfil(data.photo);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({user, name: user.name});
      });
  };

  const tamanhoImagem = width * 0.3;
  return (
    <ImageBackground source={background} style={{width, height}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.main}>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            top: -tamanhoImagem / 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FotoPerfil size={tamanhoImagem} source={{uri: perfil}} />
        </View>
        <View style={{height: tamanhoImagem / 1.8}} />
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
            fontSize: 25,
          }}>
          Alisson Lima
        </Text>
        {viewNumeros()}
        <UltimaCrise />
      </View>
    </ImageBackground>
  );
};

export default Dashboard;
