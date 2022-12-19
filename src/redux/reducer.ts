import {Alert, Text} from 'react-native';
import * as actionTypes from './actionTypes';

const initialState: UserState = {
  user: {},
  loading: false,
  error: '',
};

const AuthReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      // console.log('request');
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      // console.log('success');
      return {
        ...state,
        user: action.response,
        loading: false,
        error: '',
      };

    case actionTypes.LOGIN_FAILURE:
      // console.log('failure', action.error);

      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
