import axios from 'axios';
// import { User, UserResponse, UserLogin } from './types';

const headers = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getChars = async () => {
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/char/index/5/1`,
    headers,
  );
  return resp;
};

export const getComics = async () => {
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/comics/index/5/1`,
    headers,
  );
  return resp;
};
