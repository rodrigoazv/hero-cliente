/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { getComicsAction } from '../../store/ducks/char-comics/actions';
import Card from '../Common/card-char-comics';
import Loading from '../Common/loading';

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
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}
const SearchLocal: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComicsAction());
  }, []);
  const { comics } = useSelector((state: ApplicationState) => state.charcomics);

  const { loading } = useSelector((state: ApplicationState) => state.notify);

  return (
    <Content>
      {loading ? (
        <Loading />
      ) : (
        <CardContent>
          {comics.results.map((c: Char) => (
            <Card
              title={c.title}
              description={c.title}
              image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
            />
          ))}
        </CardContent>
      )}
    </Content>
  );
};
export default SearchLocal;
