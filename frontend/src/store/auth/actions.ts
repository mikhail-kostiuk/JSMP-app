import { logIn } from '../../API/auth/logIn';
import types from './actionTypes';
import { LoginData } from '../../types/auth';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

export const loginUser = (loginData: LoginData):ThunkAction<> => {
  return (dispatch: Dispatch) => {
    logIn(userData);
  };
};
