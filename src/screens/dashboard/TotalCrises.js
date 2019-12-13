import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import AnimateNumber from 'react-native-animate-number';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../res/colors';

const CrisesTotal = () => {
  const total = useSelector(state => state.crise.numeroCrises);
  return (
    <View style={styles.numbersView}>
      <Text style={styles.numbersDesc}>Total</Text>
      <Icon
        style={styles.icon}
        name="list-alt"
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

export default CrisesTotal;
