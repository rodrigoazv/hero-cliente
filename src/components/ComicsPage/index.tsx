/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import { ApplicationState } from '../../store';
import { getComicsIdAction } from '../../store/ducks/char-comics/actions';
import Tabs from '../Common/tabs';
import StyleIntoTab from './style-link-tab';
import { likeCharComicAction } from '../../store/ducks/user/actions';
import { verifyLike } from '../../utils/help';
/*
  Componentes props
*/
interface Param {
  id: string;
}
const Content = styled.section`
  width: 100%;
  padding: 50px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  span {
    height: 5px;
  }
  h1 {
    font-size: 40px;
  }
`;
const Main = styled.main`
  width: 100%;
  display: flex;
  margin: 0;
`;
const Banner = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: flex;
  margin: 0;
`;
const Favorit = styled.button`
  width: 100px;
  height: 50px;
  align-self: flex-end;
  margin-top: auto;
`;
/*
  MAIN
  @TEX
*/

const TabsComponents = [
  {
    label: 'Characters',
    component: <StyleIntoTab type="characters" linked />,
  },
  {
    label: 'Story',
    component: <StyleIntoTab type="stories" />,
  },
];
/*

*/
const CharPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id }: Param = useParams();
  const { comicsById } = useSelector(
    (state: ApplicationState) => state.charcomics,
  );

  const { loading } = useSelector((state: ApplicationState) => state.notify);
  const { likedComic } = useSelector((state: ApplicationState) => state.user);
  useEffect(() => {
    dispatch(getComicsIdAction(id));
  }, []);
  const setLike = (
    idL: string,
    nameL: string,
    thumbL: string,
    like: boolean,
  ) => {
    dispatch(
      likeCharComicAction({
        id: idL,
        name: nameL,
        thumb: thumbL,
        type: 'comics',
        like: !like,
      }),
    );
  };
  const allIds = likedComic?.map((val) => val.comicId);
  return (
    <Main>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          {loading ? (
            <Skeleton variant="rect" width="100%" height={500} />
          ) : (
            <Banner
              src={`${comicsById.thumbnail.path}.${comicsById.thumbnail.extension}`}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          {loading ? (
            <Content>
              <Skeleton variant="rect" width="100%" height={50} />
              <span />
              <Skeleton variant="rect" width="100%" height={100} />
              <Favorit>Favoritar</Favorit>
            </Content>
          ) : (
            <Content>
              <h1>{comicsById.title}</h1>
              <p>{comicsById.description || comicsById.title}</p>
              {verifyLike(allIds, comicsById.id) ? (
                <Favorit
                  onClick={() =>
                    setLike(
                      comicsById.id,
                      comicsById.title,
                      `${comicsById.thumbnail.path}.${comicsById.thumbnail.extension}`,
                      false,
                    )
                  }
                >
                  Desfavoritar
                </Favorit>
              ) : (
                <Favorit
                  onClick={() =>
                    setLike(
                      comicsById.id,
                      comicsById.title,
                      `${comicsById.thumbnail.path}.${comicsById.thumbnail.extension}`,
                      true,
                    )
                  }
                >
                  Favoritar
                </Favorit>
              )}
            </Content>
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
          <Tabs customTabs={TabsComponents} />
        </Grid>
      </Grid>
    </Main>
  );
};

export default CharPage;
