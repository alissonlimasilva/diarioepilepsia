import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 50,
    textAlign: 'center',
    color: 'black',
  },
  inputs: {
    elevation: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderLeftWidth: 0,
  },
  viewFieldLogin: {
    borderTopRightRadius: 40,
    borderBottomWidth: 0.5,
  },
  viewFieldSenha: {
    borderBottomRightRadius: 40,
    borderTopWidth: 0.5,
  },
  inputLogin: {
    flex: 1,
    textTransform: 'lowercase',
    paddingRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
    borderTopRightRadius: 50,
  },
  inputSenha: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 20,
    textTransform: 'lowercase',
    borderBottomRightRadius: 50,
  },
  icon: {
    marginLeft: 20,
    fontSize: 22,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    fontSize: 25,
    color: 'white',
  },
  viewCamposBotao: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  registrar: {
    marginTop: 50,
    padding: 10,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderColor: 'red',
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    elevation: 15,
    width: '30%',
    borderTopRightRadius: 20,
  },
  textRegistro: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
  },
});
