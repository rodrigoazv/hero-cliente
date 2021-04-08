import axios from 'axios';
import Cookies from 'js-cookie';
import { User, UserResponse, UserLogin, likeCharComics } from './types';

export const sendRegister = async (user: User) => {
  const headers = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  const resp: UserResponse = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/create`,
    user,
    headers,
  );
  return resp;
};

export const sendLogin = async (user: UserLogin) => {
  const headers = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  const resp: UserResponse = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/login`,
    user,
    headers,
  );
  return resp;
};

export const likeCharComic = async (data: likeCharComics) => {
  const headers = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      authorization: Cookies.get('authorization'),
    },
    withCredentials: true,
  };
  const resp = await axios.post(
    `${process.env.REACT_APP_API_URL}/like/charOrComic`,
    data,
    headers,
  );
  return resp;
};
