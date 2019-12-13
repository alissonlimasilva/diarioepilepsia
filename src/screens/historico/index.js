import React, {useEffect} from 'react';
import {View, Text, FlatList, StatusBar, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import firebase from 'react-native-firebase';
import styles from './styles';
import moment from 'moment';
import global from '../../res/global-styles';
import {orderBy} from '../../util/orderBy';
import {selectColorByCriseNivel} from '../../util/color-selector';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import adicionaisCrise from '../../res/strings/adicionais-crise';
import {Actions} from '../../redux/ducks/crise';

const Historico = () => {
  const dispatch = useDispatch();
  const handleListaCrises = lista => dispatch(Actions.listaCrises(lista));

  const historico = useSelector(state => state.crise.lista);

  const listenerChangeList = () => {
    const user = firebase.auth().currentUser;
    const ref = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('history');
    console.log('CHAMOU');

    ref.onSnapshot(docs => {
      if (!docs) return;
      let list = [];
      docs.forEach(doc => {
        const item = Object.assign(doc.data(), {id: doc.id});
        list.push(item);
      });
      console.log(historico, list);
      if (historico === list) return;
      list = orderBy(list, 'date');
      handleListaCrises(list);
    });
  };

  useEffect(() => {
    return listenerChangeList();
  }, []);

  const renderItem = item => {
    const background = selectColorByCriseNivel(item.nivel);

    const data = moment(item.date).format('LLLL');
    return (
      <View style={styles.item}>
        <View
          opacity={0.7}
          style={[styles.overlay, {backgroundColor: background}]}
        />
        <Text style={styles.datahoraList}>{data}</Text>
        {item.sono && renderIconAndCategoria('sono')}
        {item.fome && renderIconAndCategoria('fome')}
        {item.privacaoSono && renderIconAndCategoria('privacaoSono')}
        {item.remedio && renderIconAndCategoria('remedio')}
        {item.descricao ? (
          <Text style={styles.textDescricao}>{item.descricao}</Text>
        ) : null}
      </View>
    );
  };

  const renderIconAndCategoria = atributo => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="arrow-right-circle" />
        <Text style={styles.textItem}>{adicionaisCrise[atributo]}</Text>
      </View>
    );
  };

  const renderEmpty = () => {
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
  };

  const listaHistorico = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={historico}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
    );
  };

  if (historico.length === 0) return renderEmpty();

  return (
    <View style={global.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {listaHistorico()}
    </View>
  );
};

export default Historico;
