import {call, put} from 'redux-saga/effects';

function* listaCrises() {
  try {
    const response = yield call(getListaCrises);
    yield put({type: 'SUCCESS_TODO_LIST', payload: response});
  } catch (err) {
    yield put({type: 'FAILURE_TODO_LIST'});
  }
}

function getListaCrises() {}

export {listaCrises};
