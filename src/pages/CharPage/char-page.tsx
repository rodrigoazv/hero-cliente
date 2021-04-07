import React from 'react';
import { Content } from './styles';
import Layout from '../../components/Layout';
import CharPage from '../../components/CharPage';

const Login: React.FC = () => (
  <Content>
    <Layout>
      <CharPage />
    </Layout>
  </Content>
);

export default Login;
