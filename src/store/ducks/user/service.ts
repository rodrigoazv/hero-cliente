import api from '../../../services/index';
import { User, UserResponse } from './types';

const headers = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
export const sendRegister = async (user: User) => {
  const resp: UserResponse = await api.post('/user/create', user, headers);
  return resp;
};

export const sendLogin = async (user: User) => {
  const resp: UserResponse = await api.post('/user/login', user, headers);
  return resp;
};
