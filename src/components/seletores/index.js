import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import adicionaisCrise from '../../res/strings/adicionais-crise';
import {getIcon} from '../../util/icon-selector';
import styles from './styles';
import colors from '../../res/colors';
import {mostrarAviso} from '../../util/messages';

const SeletorSmall = ({seletor = '', ...props}) => {
  const mensagem = () => {
    mostrarAviso({
      message: adicionaisCrise[seletor],
      description: ' ',
      type: 'info',
      backgroundColor: colors.primary, // background color
      color: 'white', // text color,
      icon: 'info',
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={mensagem}>
      <View style={styles.viewIcon}>
        <Icon
          name={getIcon(seletor)}
          color={colors.primary}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

export {SeletorSmall};

// const SeletorSmall = ({seletor = '', ...props}) => {
//     return (
//       <View style={styles.container}>
//         <View style={styles.viewIcon}>
//           <Icon name={getIcon(seletor)} color={colors.primary} />
//         </View>
//         <Text style={styles.desc}>{adicionaisCrise[seletor]}</Text>
//       </View>
//     );
//   };
