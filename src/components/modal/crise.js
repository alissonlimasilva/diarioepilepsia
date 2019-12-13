import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import RadioBox from '../radio';
import adicionaisCrise from '../../res/strings/adicionais-crise';
import styles from './styles';
import SliderNivelCrise from '../seletor';
import Button from '../button';
import {novaCrise} from '../../services/firebase';
import moment from 'moment';
import {mostrarAviso} from '../../util/messages';
import Modal from 'react-native-modal';
import localization from 'moment/locale/pt-br';

const AddCrise = ({show = false, onChangeVisible = () => {}, ...props}) => {
  //HOOKS
  const [sono, setSono] = useState(false);
  const [fome, setFome] = useState(false);
  const [privacaoSono, setPrivacaoSono] = useState(false);
  const [remedio, setRemedio] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [nivel, setNivel] = useState(1);

  const escolhas = () => {
    return (
      <View style={{marginVertical: 20}}>
        <RadioBox
          checked={sono}
          onPress={setSono}
          title={adicionaisCrise.sono}
        />
        <RadioBox
          checked={privacaoSono}
          onPress={setPrivacaoSono}
          title={adicionaisCrise.privacaoSono}
        />
        <RadioBox
          checked={fome}
          onPress={setFome}
          title={adicionaisCrise.fome}
        />
        <RadioBox
          checked={remedio}
          onPress={setRemedio}
          title={adicionaisCrise.remedio}
        />
      </View>
    );
  };

  const renderFieldDescricao = () => {
    return (
      <TextInput
        style={styles.descricao}
        onChangeText={text => setDescricao(text)}
        multiline
        placeholder="Adicione uma descrição sobre a crise"
        placeholderTextColor="#505050"
        numberOfLines={5}
        value={descricao}
      />
    );
  };

  const seletor = () => {
    return <SliderNivelCrise onChange={setNivel} slideValue={nivel} />;
  };

  const onPressSave = () => {
    moment().locale('pt-br', localization);
    const crise = {
      date: moment().format(),
      descricao,
      nivel,
      fome,
      sono,
      privacaoSono,
      remedio,
    };
    const result = novaCrise(crise);
    console.log(result);
    const options = result
      ? {message: 'Nova crise cadastrada', type: 'success'}
      : {message: 'Ocorreu um erro', type: 'error'};
    mostrarAviso(options);
    onChangeVisible(false);
  };
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={() => onChangeVisible(!show)}
      onBackdropPress={() => onChangeVisible(!show)}>
      <View style={styles.modal}>
        <Text style={styles.tituloModal}>Nova crise?</Text>
        {seletor()}
        {escolhas()}
        {renderFieldDescricao()}
        <Button title="Registrar" onPress={onPressSave} />
      </View>
    </Modal>
  );
};

export default AddCrise;
