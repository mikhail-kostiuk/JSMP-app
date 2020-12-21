import axios from 'axios';

export function setAuthToken(token: string | null): void {
  if (token) {
    axios.defaults.headers['Authorization'] = token;
  } else {
    delete axios.defaults.headers['Authorization'];
  }
}
