import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const Main = styled.div``;
const Content = styled.div``;

const StyleLinkTab: React.FC = () => {
  const { charById } = useSelector(
    (state: ApplicationState) => state.charcomics,
  );
  console.log(charById);
  return (
    <Main>
      <Content />
    </Main>
  );
};

export default StyleLinkTab;
