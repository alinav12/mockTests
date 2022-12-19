import {all, put, takeLatest} from 'redux-saga/effects';

import {userLogin} from '../api/login';

function* rootSaga() {
  yield all([loginScreenSaga()]);
}

export function* loginUser({payload}: {payload: IUserLogin}): any {
  try {
    const response = yield userLogin(payload);
    yield put({type: 'LOGIN_SUCCESS', response});
  } catch (error: any) {
    yield put({type: 'LOGIN_FAILURE', error: error});
  }
}
function* loginScreenSaga() {
  yield takeLatest('LOGIN_REQUEST', loginUser);
}

export default rootSaga;
