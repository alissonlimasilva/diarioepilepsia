import React, {useState} from 'react';
import {TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';
import AddCrise from '../modal/crise';
const SIZE = 80;

export const AddButton = () => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <TouchableHighlight
        onPress={() => setModal(!modal)}
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
      <AddCrise show={modal} onChangeVisible={setModal} />
    </View>
  );
};
