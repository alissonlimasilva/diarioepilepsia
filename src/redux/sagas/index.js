import {takeLatest} from 'redux-saga/effects';
import {listaCrises} from './crise';
import {user} from './user';
import {Types as TypesUser} from '../ducks/user';
import {Types as TypesCrise} from '../ducks/crise';

export default function* root() {
  // yield takeLatest(TypesCrise.lista, listaCrises);
  yield takeLatest(TypesUser.REQUEST, user);
}
