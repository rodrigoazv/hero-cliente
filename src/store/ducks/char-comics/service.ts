import axios from 'axios';

export const getChars = async (search?: string, page?: number) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      authorization: localStorage.getItem('@authorization'),
    },
    withCredentials: true,
  };
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/char/index/12/${page || 0}?&search=${
      search || ''
    }`,
    headers,
  );

  return resp;
};
export const getCharId = async (id: string) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      authorization: localStorage.getItem('@authorization'),
    },
    withCredentials: true,
  };
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/char/index/${id}`,
    headers,
  );
  return resp;
};

export const getComics = async (search?: string, page?: number) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      authorization: localStorage.getItem('@authorization'),
    },
    withCredentials: true,
  };
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/comics/index/12/${page || 0}?&search=${
      search || ''
    }`,
    headers,
  );
  return resp;
};

export const getComicsId = async (id: string) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      authorization: localStorage.getItem('@authorization'),
    },
    withCredentials: true,
  };
  const resp = await axios.get(
    `${process.env.REACT_APP_API_URL}/comics/index/${id}`,
    headers,
  );
  return resp;
};
