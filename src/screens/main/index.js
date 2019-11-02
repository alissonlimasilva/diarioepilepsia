import React from 'react';
import {View, Text, FlatList, StatusBar, Image} from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';
import moment from 'moment';
import global from '../../res/global-styles';
import {orderBy} from '../../util/orderBy';
const tipos = {
  FRACO: 'FRACO',
  MEDIO: 'MEDIO',
  FORTE: 'FORTE',
};

export default class Main extends React.Component {
  state = {
    showModal: false,
    isAuth: false,
    user: null,
    historico: [],
  };

  async componentDidMount() {
    this.getHistorico();
    this.listenerChangeList();
  }

  render() {
    const {isAuth} = this.state;

    if (!isAuth) return <View />;

    if (this.state.historico.length === 0) return this.renderEmpty();

    return (
      <View style={global.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {this.listaHistorico()}
      </View>
    );
  }

  listenerChangeList() {
    const user = firebase.auth().currentUser;
    const ref = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('history');

    ref.onSnapshot(docs => {
      if (!docs) return;
      const {historico} = this.state;
      let list = [];
      docs.forEach(doc => {
        const item = Object.assign(doc.data(), {id: doc.id});
        list.push(item);
      });
      if (historico === list) return;
      console.log('ONUPDATE', list);
      list = orderBy(list, 'date');
      this.setState({historico: list});
    });
  }

  async getHistorico() {
    const user = firebase.auth().currentUser;
    const snapshot = await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('history')
      .get();

    if (!snapshot) {
      this.setState({
        user,
        isAuth: true,
      });
    }

    const historico = [];
    snapshot.forEach(doc => {
      const item = Object.assign(doc.data(), {id: doc.id});
      historico.push(item);
    });

    console.log(historico);

    this.setState({
      user,
      historico: historico.length === 0 ? [] : orderBy(historico, 'date'),
      isAuth: true,
    });
  }

  renderItem(item) {
    const background =
      item.tipo === tipos.FRACO
        ? 'green'
        : item.tipo === tipos.MEDIO
        ? 'orange'
        : 'red';

    const data = moment(item.date).format('LLLL');
    return (
      <View style={styles.item}>
        <View
          opacity={0.7}
          style={[styles.overlay, {backgroundColor: background}]}
        />
        <Text style={styles.datahoraList}>{data}</Text>
      </View>
    );
  }

  renderEmpty() {
    const source = require('../../res/img/icons/empty.png');
    return (
      <View style={styles.viewEmpty}>
        <Image style={styles.imageEmpty} source={source} />
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 'bold',
            color: 'gray',
          }}>
          Sem dados
        </Text>
      </View>
    );
  }

  listaHistorico() {
    const {historico} = this.state;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={historico}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}
