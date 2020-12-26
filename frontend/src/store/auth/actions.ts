import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';

import { LoginData } from '../../types/auth';
import { setAuthToken } from '../../utils/setAuthToken';
import actionTypes from './actionTypes';
import { RootState } from '../reducer';

export const login = (
  loginData: LoginData
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch) => {
    console.log('login');
    try {
      login
      
    } catch (error) {
      
    }

    Axios.post('http://localhost:5050/login', loginData)
      .then((response: AxiosResponse) => {
        const token = response.data;
        const userData = jwtDecode(token);

        localStorage.setItem('token', response.data);
        setAuthToken(token);
        dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: userData,
        });
      })
      .catch((error: AxiosError) => {
        alert(error.response?.data);
      });
  };
};

export const logout = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    localStorage.removeItem('token');
    setAuthToken(null);

    window.location.href = 'login';

    dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: null,
    });
  };
};
