/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { InputText } from '../Common/forms';
import { ApplicationState } from '../../store';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 48px;
  height: 100%;
  background: ${(p) => p.theme.colors.primary.main};
  padding: 10px 30px;
  width: 50%;
`;

/*
  MAIN
  @TEX
*/
const SearchLocal: React.FC = () => {
  const { search } = useSelector((state: ApplicationState) => state.local);
  const searchAction = (event: any) => {
    console.log(`${search.url}${event.target.value}`);
  };
  return (
    <Content>
      <InputText
        placeholder={`Pesquise por um(a) ${search.name}`}
        onChange={searchAction}
      />
    </Content>
  );
};
export default SearchLocal;
