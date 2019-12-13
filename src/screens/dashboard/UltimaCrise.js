import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import styles from './styles';
import firebase from 'react-native-firebase';
import {Actions} from '../../redux/ducks/crise';
import {SeletorSmall} from '../../components/seletores';
import {FlatList} from 'react-native-gesture-handler';
import {getDescricao} from '../../util/tipo-selector';
import {selectColorByCriseNivel} from '../../util/color-selector';

const UltimaCrise = () => {
  const dispatch = useDispatch();
  const alteraUltimaCrise = value => dispatch(Actions.ultimaCrise(value));
  const ultimaCrise = useSelector(state => state.crise.ultimaCrise);

  const getUltimaCrise = () => {
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('history')
      .orderBy('date', 'desc')
      .limit(1)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log('Last', doc.data());
          alteraUltimaCrise(doc.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUltimaCrise();
  }, []);

  if (!ultimaCrise) return null;

  let data = moment(ultimaCrise.date).format('LLLL');

  const renderListaObservacoes = () => {
    const lista = [];
    lista.push({id: 0, atributo: 'sono', value: ultimaCrise.sono});
    lista.push({id: 1, atributo: 'fome', value: ultimaCrise.fome});
    lista.push({
      id: 2,
      atributo: 'privacaoSono',
      value: ultimaCrise.privacaoSono,
    });
    lista.push({id: 3, atributo: 'remedio', value: ultimaCrise.remedio});
    return (
      <FlatList
        data={lista}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => {
          if (!item.value) return null;
          return <SeletorSmall seletor={item.atributo} />;
        }}
      />
    );
  };

  const intensidade = () => {
    return (
      <Text style={styles.descIntensidade}>
        Sua última crise foi de intensidade{` `}
        <Text
          style={[
            styles.intensidade,
            {color: selectColorByCriseNivel(ultimaCrise.nivel)},
          ]}>
          {getDescricao(ultimaCrise.nivel)}
        </Text>
      </Text>
    );
  };

  return (
    <View>
      <Text style={styles.ultimaCrise}>Última crise</Text>
      <View style={styles.cardUltimaCrise}>
        {intensidade()}
        {renderListaObservacoes()}
        {ultimaCrise.descricao ? (
          <View style={styles.viewDesc}>
            <Text numberOfLines={3} style={styles.textDescricaoUltimaCrise}>
              {ultimaCrise.descricao}
            </Text>
          </View>
        ) : null}
        <Text style={styles.datahora}>{data}</Text>
      </View>
    </View>
  );
};

export default UltimaCrise;
