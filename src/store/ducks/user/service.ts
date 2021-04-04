import axios from 'axios';
import { User, UserResponse, UserLogin } from './types';

const headers = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const sendRegister = async (user: User) => {
  const resp: UserResponse = await axios.post(
    `${process.env.API_URL}/user/create`,
    user,
    headers,
  );
  return resp;
};

export const sendLogin = async (user: UserLogin) => {
  const resp: UserResponse = await axios.post(
    `${process.env.API_URL}/user/login`,
    user,
    headers,
  );

  return resp;
};
