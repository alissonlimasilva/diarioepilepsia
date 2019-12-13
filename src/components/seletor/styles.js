import {StyleSheet} from 'react-native';
const LARGURA_SLIDER = 300;
const ALTURA_SLIDER = 40;

export default StyleSheet.create({
  desc: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    backgroundColor: '#d3d3d3',
    width: LARGURA_SLIDER,
    height: ALTURA_SLIDER,
    borderRadius: 50,
    position: 'absolute',
  },
  sliderPreenchido: {
    height: ALTURA_SLIDER,
    borderRadius: 50,
  },
});
