/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { getCharsAction } from '../../store/ducks/char-comics/actions';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 48px;
  height: 100%;
  padding: 10px 0;
`;

/*
  MAIN
  @TEX
*/
interface Char {
  name: string;
}
const SearchLocal: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharsAction());
  }, []);
  const { char } = useSelector((state: ApplicationState) => state.charcomics);

  const { loading } = useSelector((state: ApplicationState) => state.notify);

  return (
    <Content>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        char.results.map((c: Char) => <h1>{c.name}</h1>)
      )}
    </Content>
  );
};
export default SearchLocal;
