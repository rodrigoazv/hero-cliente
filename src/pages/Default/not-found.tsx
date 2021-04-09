import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import { ApplicationState } from '../../store';

const Login: React.FC = () => {
  const { auth } = useSelector((state: ApplicationState) => state.user);
  return (
    <>
      {!auth ? (
        <Layout>
          <h1>rota não encontrada</h1>
        </Layout>
      ) : (
        <h1>Rota não encontrada</h1>
      )}
    </>
  );
};

export default Login;
