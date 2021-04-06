/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React from 'react';
import Apresentation from './apresentation';
import Tabs from '../Common/tabs';
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
      <Tabs customTabs={TabsComponents} />
    </Content>
  );
};
export default HomePage;
