/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React from 'react';

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  width: 100%;
  h1 {
    font-size: 50px;
    b {
      color: ${(p) => p.theme.colors.primary.main};
    }
  }
`;
/*
  MAIN
  @TEX
*/
const Apresentation: React.FC = () => (
  <Content>
    <h1>
      Tudo sobre o universo de <b>Super Herois</b> em um só lugar
    </h1>
    <h1>-</h1>
  </Content>
);
export default Apresentation;
