import React from 'react';
import {View, Slider, Text} from 'react-native';
import styles from './styles';
import {selectColorByCriseNivel} from '../../util/color-selector';

const SliderNivelCrise = ({slideValue, onChange, ...props}) => {
  const color = selectColorByCriseNivel(slideValue);
  return (
    <View>
      <View style={styles.viewText}>
        <Text style={styles.desc}>Fraca</Text>
        <Text style={styles.desc}>Forte</Text>
      </View>
      <View style={{borderRadius: 50, overflow: 'hidden'}}>
        <View style={{flexDirection: 'row', position: 'absolute'}}>
          <View style={styles.sliderContainer} />
          <View
            style={[
              styles.sliderPreenchido,
              {
                backgroundColor: color,
                width: 60 * slideValue,
              },
            ]}
          />
        </View>
        <Slider
          style={{width: 300, height: 40, borderRadius: 50}}
          minimumValue={1}
          maximumValue={5}
          step={1}
          thumbTintColor="white"
          value={slideValue}
          onValueChange={value => onChange(value)}
          maximumTrackTintColor={'transparent'}
          minimumTrackTintColor={'transparent'}
        />
      </View>
    </View>
  );
};

export default SliderNivelCrise;
