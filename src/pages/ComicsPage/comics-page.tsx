import React from 'react';
import { Content } from './styles';
import Layout from '../../components/Layout';
import ComicsPage from '../../components/ComicsPage';

const Login: React.FC = () => (
  <Content>
    <Layout>
      <ComicsPage />
    </Layout>
  </Content>
);

export default Login;
