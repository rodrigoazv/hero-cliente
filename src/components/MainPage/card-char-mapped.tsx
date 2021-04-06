/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { getCharsAction } from '../../store/ducks/char-comics/actions';
import Card from '../Common/card-char-comics';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  padding: 10px 0;
`;

/*
  MAIN
  @TEX
*/
interface Char {
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
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
        <CardContent>
          {char.results.map((c: Char) => (
            <Card
              title={c.name}
              description={c.name}
              image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
            />
          ))}
        </CardContent>
      )}
    </Content>
  );
};
export default SearchLocal;
