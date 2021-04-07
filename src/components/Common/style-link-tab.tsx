import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Content = styled.div`
  background-color: ${(p) => p.theme.colors.secondary.main};
  padding: 30px;
  display: flex;
  margin: 10px;
  width: 180px;
  border-radius: 8px;
  justify-content: space-between;
  h1 {
    color: ${(p) => p.theme.colors.primary.main};
    font-size: 20px;
  }
`;

interface Props {
  type: string;
}

const StyleLinkTab: React.FC<Props> = ({ type }: Props) => {
  const [data, setData] = useState([{}]);
  const { charById } = useSelector(
    (state: ApplicationState) => state.charcomics,
  );
  useEffect(() => {
    if (type === 'series') {
      setData(charById.series.items);
    }
    if (type === 'stories') {
      setData(charById.stories.items);
    }
  }, [charById]);
  return (
    <Main>
      {data.map((c: any) => (
        <Content key={c.name}>
          <h1 key={c.name}>{c.name}</h1>
        </Content>
      ))}
    </Main>
  );
};

export default StyleLinkTab;
