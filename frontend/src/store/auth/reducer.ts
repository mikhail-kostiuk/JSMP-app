import actionTypes from './actionTypes';
import { AuthState, AuthActionTypes } from './types';

const initialState: AuthState = { user: null };

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
