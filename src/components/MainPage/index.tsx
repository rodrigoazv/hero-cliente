/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Apresentation from './apresentation';
import Tabs from '../Common/tabs';
// import { PropsTab } from '../Common/types';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabsComponents = [
  { label: 'Char', searchUrl: '/char', component: <h1>oi</h1> },
  { label: 'Comics', searchUrl: '/Comics', component: <h1>oi</h1> },
];
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => (
  <Content>
    <Apresentation />
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <Tabs customTabs={TabsComponents} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div> Pesquisar </div>
      </Grid>
    </Grid>
  </Content>
);
export default HomePage;
