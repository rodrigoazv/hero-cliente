import axios from 'axios';
// import { User, UserResponse, UserLogin } from './types';

const headers = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getChars = async (search?: string) => {
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/char/index/10/1?&search=${search || ''}`,
    headers,
  );
  return resp;
};

export const getComics = async (search?: string) => {
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/comics/index/10/1?&search=${
      search || ''
    }`,
    headers,
  );
  return resp;
};
