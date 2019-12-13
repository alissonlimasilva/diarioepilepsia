import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import AnimateNumber from 'react-native-animate-number';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';

const CrisesSemana = () => {
  const total = useSelector(state => state.crise.crisesSemana);
  return (
    <View style={styles.numbersView}>
      <Text style={styles.numbersDesc}>Essa semana</Text>
      <Icon
        style={styles.icon}
        name="calendar"
        color={colors.primary}
        size={30}
      />
      <AnimateNumber
        interval={2}
        value={total}
        countBy={1}
        style={styles.numbers}
      />
      <Text style={styles.textUnidade}>crises</Text>
    </View>
  );
};

export default CrisesSemana;
