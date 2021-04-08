/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { ApplicationState } from '../../store';
import { getComicsAction } from '../../store/ducks/char-comics/actions';
import Card from '../Common/card-char-comics';
import Loading from '../Common/loading';
import { verifyLike } from '../../utils/help';

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
export interface Comics {
  title: string;
  description: string;
  id: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  characters: { items: [] };
  stories: { items: [] };
}
const SearchLocal: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const OffSet = (page - 1) * 10;
    const search = '';
    dispatch(getComicsAction(search, OffSet));
  }, [page]);

  const { comics } = useSelector((state: ApplicationState) => state.charcomics);
  const { likedComic } = useSelector((state: ApplicationState) => state.user);
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
          comics.results.map((c: Comics) => (
            <Card
              liked={verifyLike(
                likedComic.map((val) => val.comicId),
                c.id,
              )}
              search="comics"
              id={c.id}
              key={c.title}
              title={c.title}
              description={c.title}
              image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
            />
          ))
        )}
      </CardContent>
      <PaginationStyle>
        <Pagination
          count={Math.floor(comics.total / comics.limit)}
          page={page}
          onChange={handleChange}
        />
      </PaginationStyle>
    </Content>
  );
};
export default SearchLocal;
