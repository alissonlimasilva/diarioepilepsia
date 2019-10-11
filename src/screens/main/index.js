import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import RoudedButton from '../../components/rouded-button';
import Modal from 'react-native-modal';
import styles from './styles';
import moment from 'moment';
import localization from 'moment/locale/pt-br';
import global from '../../res/global-styles';
const tipos = {
  FRACO: 'FRACO',
  MEDIO: 'MEDIO',
  FORTE: 'FORTE',
};

const historico = require('./historico.json');

export default class Main extends React.Component {
  state = {
    showModal: false,
    select: tipos.MEDIO,
  };

  constructor(props) {
    super(props);
    moment().locale('pt-br', localization);
  }

  render() {
    console.log('Render');
    return (
      <View style={global.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {this.listaHistorico()}
        {this.buttonCrise()}
        {this.modalCrise()}
      </View>
    );
  }

  renderItem(item) {
    const background =
      item.tipo === tipos.FRACO
        ? 'green'
        : item.tipo === tipos.MEDIO
        ? 'orange'
        : 'red';

    const data = moment(item.datahora).format('LLLL');
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
            <TouchableOpacity style={styles.salvar}>
              <Text style={styles.textButtonSalvar}>Salvar</Text>
            </TouchableOpacity>
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

  saveCrise = () => {
    console.log('salvando crise');
  };
}
