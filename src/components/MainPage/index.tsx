/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Apresentation from './apresentation';
import Tabs from '../Common/tabs';
import SearchLocal from './local-search';
import CardCharMapped from './card-char-mapped';
import CardComicsMapped from './card-comics-mapped';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabsComponents = [
  {
    label: 'Char',
    searchUrl: '/char',
    component: <CardCharMapped />,
  },
  {
    label: 'Comics',
    searchUrl: '/Comics',
    component: <CardComicsMapped />,
  },
];
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
  console.log('oi');
  return (
    <Content>
      <Apresentation />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Tabs customTabs={TabsComponents} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SearchLocal />
        </Grid>
      </Grid>
    </Content>
  );
};
export default HomePage;
