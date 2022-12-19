import * as actionTypes from './actionTypes';

export const loginUser = (user: IUserLogin) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: user,
});

export const loginVerifiedUser = () => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {email: 'test@gmail.com', token: '123dfsf'},
});
