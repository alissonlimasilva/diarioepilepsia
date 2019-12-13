import {call, put} from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import {Types} from '../ducks/user';

function* user() {
  console.log('Carregando dados do usuário');
  try {
    const response = yield call(getUserData);
    const data = response.data();
    console.log('DADOS DO USUÁRIO: ', JSON.stringify(data));
    yield put({type: Types.SUCCESS, payload: data});
  } catch (err) {
    console.log(err);
    yield put({type: Types.FAILURE});
  }
}

export {user};

function getUserData() {
  const user = firebase.auth().currentUser;
  return firebase
    .firestore()
    .collection('users')
    .doc(user.uid)
    .collection('data')
    .doc('account')
    .get();
}
