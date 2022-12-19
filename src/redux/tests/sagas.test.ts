import {runSaga} from 'redux-saga';

import * as api from '../../api/login';
import * as actions from '../actionCreators';
import * as actionTypes from '../actionTypes';
import {loginUser} from '../sagas';

describe('loginUser', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call api and dispatch success action', async () => {
    const userExample = {
      login: 'test@gmail.com',
      password: 'test',
    };

    const response = {token: 'qwerty123', email: 'qwerty@qwerty.wer'};

    const requestLogin = jest
      .spyOn(api, 'userLogin')
      .mockImplementation(userExample => Promise.resolve(response));

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      loginUser,
      userExample,
    ).toPromise();
    expect(requestLogin).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      {
        type: actionTypes.LOGIN_SUCCESS,
        response,
      },
    ]);
  });

  it('should call api and dispatch failed action', async () => {
    const userExample = {
      login: 'error',
      password: 'error',
    };

    const errorMessage = 'Request failed';

    const requestLogin = jest
      .spyOn(api, 'userLogin')
      .mockImplementation(userExample => Promise.reject(errorMessage));

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      loginUser,
      userExample,
    ).toPromise();
    expect(requestLogin).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      {
        type: actionTypes.LOGIN_FAILURE,
        error: errorMessage,
      },
    ]);
  });
});
