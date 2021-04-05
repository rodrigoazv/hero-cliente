import React from 'react';
import { Content } from './styles';
import Layout from '../../components/Layout';
import MainPage from '../../components/MainPage';

const Login: React.FC = () => (
  <Content>
    <Layout>
      <MainPage />
    </Layout>
  </Content>
);

export default Login;
