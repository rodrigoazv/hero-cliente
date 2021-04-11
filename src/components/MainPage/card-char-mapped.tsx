/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { ApplicationState } from '../../store';
import { getCharsAction } from '../../store/ducks/char-comics/actions';
import Card from '../Common/card-char-comics';
import Loading from '../Common/loading';
import { verifyLike } from '../../utils/help';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
  height: 800px;
  @media (max-width: 1500px) {
    padding: 10px 20px;
  }
`;

const PaginationStyle = styled.div`
  align-self: center;
  padding: 50px 0;
  @media (max-width: 1200px) {
    display: block;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px;
    background: rgb(255, 255, 255);
    transition: all 300ms ease-in-out 0s;
    padding: 20px 0;
    z-index: 3;
    bottom: 0px;
    width: 100%;
    position: fixed;
    left: 0p;
  }
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
  comics: { items: [] };
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
  const { likedChar } = useSelector((state: ApplicationState) => state.user);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const allIds = likedChar?.map((val) => val.charId);
  return (
    <Content>
      <CardContent>
        {loading ? (
          <Loading />
        ) : (
          <>
            {char.results.map((c: Char) => (
              <Card
                search="characters"
                id={c.id}
                title={c.name}
                description={c.description || c.name}
                image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                liked={verifyLike(allIds, c.id)}
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
