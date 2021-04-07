/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { ApplicationState } from '../../store';
import { getCharsIdAction } from '../../store/ducks/char-comics/actions';
import Tabs from '../Common/tabs';
import StyleIntoTab from '../Common/style-link-tab';
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
    label: 'Series',
    searchUrl: '/Series',
    component: <StyleIntoTab />,
  },
  {
    label: 'Story',
    searchUrl: '/Story',
    component: <StyleIntoTab />,
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
  useEffect(() => {
    dispatch(getCharsIdAction(id));
  }, []);
  return (
    <Main>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          <Banner
            src={`${charById.thumbnail.path}.${charById.thumbnail.extension}`}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Content>
            <h1>{charById.name}</h1>
            <p>{charById.description || charById.name}</p>
            <Favorit>Favoritar</Favorit>
          </Content>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Tabs customTabs={TabsComponents} />
        </Grid>
      </Grid>
    </Main>
  );
};

export default CharPage;
