import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import localization from 'moment/locale/pt-br';
import firebase from 'react-native-firebase';
import RoudedButton from '../rouded-button';
import Modal from 'react-native-modal';
import Button from '../button';
import styles from './styles';
import colors from '../../res/colors';

const SIZE = 80;
const tipos = {
  FRACO: 'FRACO',
  MEDIO: 'MEDIO',
  FORTE: 'FORTE',
};
export class AddButton extends Component {
  state = {
    showModal: false,
  };

  constructor(props) {
    super(props);
    moment().locale('pt-br', localization);
  }

  modalCrise() {
    const {showModal} = this.state;
    const data = moment().format('L');
    const hora = moment().format('LT');
    console.log(showModal);
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

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.handleModal}
          underlayColor={colors.addButtonPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: colors.addButton,
          }}>
          <Icon name="plus" size={26} color="#F8F8F8" />
        </TouchableHighlight>
        {this.modalCrise()}
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
    console.log('Teste');
    this.setState({
      showModal: !showModal,
    });
  };

  use;

  saveCrise = () => {
    const user = firebase.auth().currentUser;
    const {select} = this.state;
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
