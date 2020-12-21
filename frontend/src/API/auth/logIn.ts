import axios, { AxiosResponse } from 'axios';
import { LoginData } from '../../types/auth';

export async function logIn({
  email,
  password,
}: LoginData): Promise<void | string> {
  return axios
    .post('http://localhost:5050/login', {
      email,
      password,
    })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => error.response.data);
}
