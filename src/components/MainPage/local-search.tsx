/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from 'src/store/ducks/char-comics/actions';
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
  const dispatch = useDispatch();
  const { search } = useSelector((state: ApplicationState) => state.local);

  const searchAction = (event: any) => {
    const searchVal = {
      searchUrl: search.url,
      searchType: search.name,
      valueSearch: event.target.value,
    };
    dispatch(getSearch(searchVal));
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
