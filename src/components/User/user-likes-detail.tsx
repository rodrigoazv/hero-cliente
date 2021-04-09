import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
import Tabs from '../Common/tabs';
import Card from '../Common/card-char-comics';
import { verifyLike } from '../../utils/help';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;

const CardCharMapped: React.FC = () => {
  const { likedChar } = useSelector((state: ApplicationState) => state.user);
  const allIds = likedChar?.map((val) => val.charId);
  return (
    <CardContent>
      {likedChar.map((c) => (
        <Card
          search="characters"
          id={c.charId}
          title={c.charName}
          description={c.charName}
          image={c.charThumb}
          liked={verifyLike(allIds, c.charId)}
        />
      ))}
    </CardContent>
  );
};

const CardComicMapped: React.FC = () => {
  const { likedComic } = useSelector((state: ApplicationState) => state.user);
  const allIds = likedComic?.map((val) => val.comicId);
  return (
    <CardContent>
      {likedComic.map((c) => (
        <Card
          search="comics"
          id={c.comicId}
          title={c.comicName}
          description={c.comicName}
          image={c.comicThumb}
          liked={verifyLike(allIds, c.comicId)}
        />
      ))}
    </CardContent>
  );
};

const TabsComponents = [
  {
    label: 'Characters',
    searchUrl: '/char',
    component: <CardCharMapped />,
  },
  {
    label: 'Comics',
    searchUrl: '/char',
    component: <CardComicMapped />,
  },
];
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => (
  <Content>
    <Tabs customTabs={TabsComponents} />
  </Content>
);
export default HomePage;
