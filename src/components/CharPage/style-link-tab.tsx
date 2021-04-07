/* eslint-disable react/require-default-props */
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoChevronRight } from 'react-icons/go';
import { ApplicationState } from '../../store';

const Main = styled.div`
  display: flex;

  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`;
const Content = styled.div`
  background-color: ${(p) => p.theme.colors.secondary.main};
  padding: 30px;
  display: flex;
  margin: 10px;
  width: 180px;
  flex-direction: column;
  height: 150px;
  border-radius: 8px;
  justify-content: space-between;
  h1 {
    padding: 3px 0;
    color: ${(p) => p.theme.colors.primary.contrastText};
    font-size: 20px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  span {
    display: flex;
    p {
      color: #fff;
      font-weight: bold;
      padding: 7px 0;
    }
  }
  &:hover {
    background-color: ${(p) => p.theme.colors.primary.main};
  }
`;

interface Props {
  type: string;
  linked?: boolean;
}

const StyleLinkTab: React.FC<Props> = ({ type, linked }: Props) => {
  const [data, setData] = useState([{}]);

  const { charById } = useSelector(
    (state: ApplicationState) => state.charcomics,
  );
  useEffect(() => {
    if (type === 'comics') {
      setData(charById.comics.items);
    }
    if (type === 'stories') {
      setData(charById.stories.items);
    }
  }, [charById]);
  return (
    <Main>
      {data.map((c: any) => (
        <>
          {linked ? (
            <Link to={`/${type}/${c.resourceURI?.split('/').pop()}`}>
              <Content key={c.name}>
                <h1 key={c.name}>{c.name}</h1>
                <span>
                  <p>Detalhes</p>
                  <GoChevronRight size={32} color="#fff" />
                </span>
              </Content>
            </Link>
          ) : (
            <Content key={c.name}>
              <h1 key={c.name}>{c.name}</h1>
            </Content>
          )}
        </>
      ))}
    </Main>
  );
};

export default StyleLinkTab;
