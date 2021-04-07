/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { ApplicationState } from '../../store';
import { getCharsAction } from '../../store/ducks/char-comics/actions';
import Card from '../Common/card-char-comics';
import Loading from '../Common/loading';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
  height: 800px;
`;

const PaginationStyle = styled.div`
  margin: 10px auto 100px auto;
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

export interface Char {
  name: string;
  description: string;
  id: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  series: { items: [] };
  stories: { items: [] };
}

const SearchLocal: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const OffSet = (page - 1) * 10;
    const search = '';
    dispatch(getCharsAction(search, OffSet));
  }, [page]);
  const { char } = useSelector((state: ApplicationState) => state.charcomics);
  const { loading } = useSelector((state: ApplicationState) => state.notify);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Content>
      <CardContent>
        {loading ? (
          <Loading />
        ) : (
          <>
            {char.results.map((c: Char) => (
              <Card
                search="char"
                id={c.id}
                title={c.name}
                description={c.description || c.name}
                image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
              />
            ))}
          </>
        )}
      </CardContent>
      <PaginationStyle>
        <Pagination
          count={Math.floor(char.total / char.limit)}
          page={page}
          onChange={handleChange}
        />
      </PaginationStyle>
    </Content>
  );
};
export default SearchLocal;
