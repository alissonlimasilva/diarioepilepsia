import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../../res/colors';

export default StyleSheet.create({
  main: {
    padding: 10,
    margin: 15,
    marginTop: 60,
    flex: 1,
    borderRadius: 20,
    elevation: 30,
    backgroundColor: 'white',
  },
  numbers: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
  numbersDesc: {
    fontSize: 11,
    marginBottom: 5,
    fontWeight: 'bold',
    color: colors.primary,
  },
  numbersView: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    elevation: 20,
    padding: 10,
    borderRadius: 10,
  },
  ultimaCrise: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginVertical: 10,
  },
  textUnidade: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: 'bold',
  },
  numbersUltimaCrise: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: width / 5,
    height: width / 5,
    borderColor: colors.primary,
    borderWidth: 5,
    borderRadius: width / 8,
  },
  descUltimo: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: colors.primary,
  },
  itemUltimo: {
    padding: 10,
    marginVertical: 5,
    elevation: 20,
  },
  datahora: {
    textAlign: 'right',
    fontSize: 11,
    marginTop: 5,
  },
  cardUltimaCrise: {
    elevation: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textDescricaoUltimaCrise: {
    fontSize: 12,
  },
  viewDesc: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.gray,
  },
  descIntensidade: {marginBottom: 10},
  intensidade: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
