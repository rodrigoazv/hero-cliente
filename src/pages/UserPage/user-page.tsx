import React from 'react';
import { Content } from './styles';
import UserPage from '../../components/User/user-detail';
import Layout from '../../components/Layout';
/*
  Componentes styles
*/
const Login: React.FC = () => (
  <Content>
    <Layout>
      <UserPage />
    </Layout>
  </Content>
);

export default Login;
