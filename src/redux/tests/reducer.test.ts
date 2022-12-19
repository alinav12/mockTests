import AuthReducer from '../reducer';
import * as actionTypes from '../actionTypes';

describe('AuthRedcer', () => {
  const initialState: UserState = {
    user: {},
    loading: false,
    error: '',
  };

  it('should return the initial state', () => {
    expect(AuthReducer(undefined, {type: undefined})).toEqual(initialState);
  });

  it('should handle LOGIN_REQUEST', () => {
    const loginRequestAction = {
      type: actionTypes.LOGIN_REQUEST,
    };
    const reducerReturnValue = AuthReducer(initialState, loginRequestAction);

    expect(reducerReturnValue.loading).toEqual(true);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const prevState = JSON.parse(JSON.stringify(initialState));
    prevState.loading = true;

    const userExample = {
      token: 'tokenTest',
      email: 'emailTest',
    };

    const action = {
      type: actionTypes.LOGIN_SUCCESS,
      response: userExample,
    };

    const reducerReturnValue = AuthReducer(prevState, action);

    expect(reducerReturnValue.user).toEqual(userExample);
    expect(reducerReturnValue.loading).toEqual(false);
  });

  it('should handle LOGIN_FAILURE', () => {
    const prevState = JSON.parse(JSON.stringify(initialState));
    prevState.loading = true;

    const errorMessage = 'Request failed';

    const action = {
      type: actionTypes.LOGIN_FAILURE,
      error: errorMessage,
    };

    const reducerReturnValue = AuthReducer(prevState, action);

    expect(reducerReturnValue.user).toEqual({});
    expect(reducerReturnValue.loading).toEqual(false);
    expect(reducerReturnValue.error).toEqual(errorMessage);
  });
});
