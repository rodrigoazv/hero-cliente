/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import { ApplicationState } from '../../store';
import { getCharsIdAction } from '../../store/ducks/char-comics/actions';
import { likeCharComicAction } from '../../store/ducks/user/actions';
import Tabs from '../Common/tabs';
import StyleIntoTab from './style-link-tab';
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
    label: 'Comics',

    component: <StyleIntoTab type="comics" linked />,
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
  const { charById } = useSelector(
    (state: ApplicationState) => state.charcomics,
  );
  const { likedChar } = useSelector((state: ApplicationState) => state.user);

  const { loading } = useSelector((state: ApplicationState) => state.notify);
  useEffect(() => {
    dispatch(getCharsIdAction(id));
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
        type: 'characters',
        like: !like,
      }),
    );
  };
  const allIds = likedChar?.map((val) => val.charId);
  return (
    <Main>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          {loading ? (
            <Skeleton variant="rect" width="100%" height={500} />
          ) : (
            <Banner
              src={`${charById.thumbnail.path}.${charById.thumbnail.extension}`}
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
              <h1>{charById.name}</h1>
              <p>{charById.description || charById.name}</p>
              {verifyLike(allIds, charById.id) ? (
                <Favorit
                  onClick={() =>
                    setLike(
                      charById.id,
                      charById.name,
                      `${charById.thumbnail.path}.${charById.thumbnail.extension}`,
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
                      charById.id,
                      charById.name,
                      `${charById.thumbnail.path}.${charById.thumbnail.extension}`,
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
