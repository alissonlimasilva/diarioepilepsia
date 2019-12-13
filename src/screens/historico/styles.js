import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  viewBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    padding: 10,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  tituloModal: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
  },
  tituloSecao: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
  },
  textdatahora: {
    color: 'black',
    fontSize: 18,
  },
  salvar: {
    marginVertical: 10,
    backgroundColor: 'blue',
    fontSize: 16,
    elevation: 15,
    borderRadius: 15,
    padding: 20,
  },
  textButtonSalvar: {
    color: 'white',
    fontWeight: 'bold',
  },
  crise: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    elevation: 20,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textCrise: {
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    padding: 10,
    marginVertical: 5,
    elevation: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    borderRadius: 10,
  },
  datahoraList: {
    color: 'black',
    fontWeight: 'bold',
  },
  viewEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmpty: {
    width: width / 3,
    height: width / 3,
    resizeMode: 'contain',
  },
  textItem: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  textDescricao: {
    fontSize: 10,
    padding: 10,
  },
});
