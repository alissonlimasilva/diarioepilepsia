import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import RoudedButton from '../../components/rouded-button';
import firebase from 'react-native-firebase';
import Modal from 'react-native-modal';
import styles from './styles';
import moment from 'moment';
import localization from 'moment/locale/pt-br';
import global from '../../res/global-styles';
import {orderBy} from '../../util/orderBy';
import Button from '../../components/button';
const tipos = {
  FRACO: 'FRACO',
  MEDIO: 'MEDIO',
  FORTE: 'FORTE',
};

export default class Main extends React.Component {
  state = {
    showModal: false,
    select: tipos.MEDIO,
    isAuth: false,
    user: null,
    historico: [],
  };

  constructor(props) {
    super(props);
    moment().locale('pt-br', localization);
  }

  async componentDidMount() {
    this.getHistorico();
    this.listenerChangeList();
  }

  render() {
    const {isAuth, historico} = this.state;

    if (!isAuth) return <View />;

    return (
      <View style={global.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {this.listaHistorico()}
        {this.buttonCrise()}
        {this.modalCrise()}
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

  buttonCrise() {
    return (
      <TouchableOpacity style={styles.crise} onPress={this.handleModal}>
        <Text style={styles.textCrise}>Crise</Text>
      </TouchableOpacity>
    );
  }

  modalCrise() {
    const {showModal} = this.state;
    const data = moment().format('L');
    const hora = moment().format('LT');
    return (
      <View>
        <Modal
          isVisible={showModal}
          onBackButtonPress={this.handleModal}
          onBackdropPress={this.handleModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloModal}>Nova crise</Text>
            <Text style={styles.tituloSecao}>Intensidade</Text>
            {this.renderButtons()}
            <Text style={styles.textdatahora}>Data: {data}</Text>
            <Text style={styles.textdatahora}>Hora: {hora}</Text>
            <Button title="Registrar" onPress={this.saveCrise} />
          </View>
        </Modal>
      </View>
    );
  }

  renderButtons() {
    const {select} = this.state;
    console.log(select);
    return (
      <View style={styles.viewBotoes}>
        <RoudedButton
          onPress={this.onPressCrise}
          color="green"
          selected={select === tipos.FRACO ? true : false}
          tipo={tipos.FRACO}
        />
        <RoudedButton
          onPress={this.onPressCrise}
          color="orange"
          selected={select === tipos.MEDIO ? true : false}
          tipo={tipos.MEDIO}
        />
        <RoudedButton
          onPress={this.onPressCrise}
          color="red"
          selected={select === tipos.FORTE ? true : false}
          tipo={tipos.FORTE}
        />
      </View>
    );
  }

  onPressCrise = select => {
    this.setState({
      select,
    });
  };

  handleModal = () => {
    const {showModal} = this.state;
    this.setState({
      showModal: !showModal,
    });
  };

  use;

  saveCrise = () => {
    const {user, select} = this.state;
    console.log('salvando crise');
    const data = moment().format();
    console.log('DATA', data);
    const trySave = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('history')
      .add({date: data, tipo: select});
    trySave
      .then(() => {
        this.handleModal();
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };
}
