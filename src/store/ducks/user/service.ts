import api from '../../../services/index';
import { User, UserResponse } from './types';

export const sendRegister = async (user: User) => {
  const resp: UserResponse = await api.post('/user/create', user);
  return resp;
};
