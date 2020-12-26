import { User } from '../../interfaces/user';

export interface AuthState {
  user: User | null;
}

interface SetCurrentUserAction {
  type: string;
  payload: User | null;
}

export type AuthActionTypes = SetCurrentUserAction;
