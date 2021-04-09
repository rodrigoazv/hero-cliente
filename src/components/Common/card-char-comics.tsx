/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { likeCharComicAction } from '../../store/ducks/user/actions';
import { likeCharComics } from '../../store/ducks/user/types';

const Father = styled.div`
  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  text-decoration: none;
  z-index: 5;
  margin: 0 0 20px 0;
  background: ${(p) => p.theme.colors.secondary.main};
  color: ${(p) => p.theme.colors.secondary.contrastText};
  height: 140px;
  width: 280px;
  display: flex;
  flex-direction: row;
  transform: translateX(2%);
  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
  span {
    width: 100px;
    height: 1px;
  }

  transition: 0.2s;
  &: hover {
    background: ${(p) => p.theme.colors.secondary.contrastText};
    color: ${(p) => p.theme.colors.secondary.main};
    border: 1px solid ${(p) => p.theme.colors.secondary.main};
    border-radius: 4px;
    transform: translateX(0);
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
  }
`;
const Img = styled.img`
  z-index: 10;
  height: 150px;
  width: 100px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  margin-top: -5px;
  margin-left: -5px;
`;

const Content = styled.div`
  height: 140px;
  width: 150px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Favor = styled.button`
  height: 40px;
  width: 50px;
  transform: translateX(2%);
  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
  margin-left: 80%;
  margin-bottom: -5px;
  border: 1px solid ${(p) => p.theme.colors.gold};
  border-radius: 5px;
  background-color: ${(p) => p.theme.colors.secondary.main};
  color: ${(p) => p.theme.colors.gold};
  &: hover {
    background: ${(p) => p.theme.colors.secondary.contrastText};
    color: ${(p) => p.theme.colors.secondary.main};
    border: 1px solid ${(p) => p.theme.colors.secondary.main};
    border-radius: 4px;
    transform: translateX(0);
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
  }
`;

/*
  Componentes props
*/
interface Props {
  title: string;
  image: string;
  description: string;
  id: string;
  search: 'comics' | 'characters';
  liked: boolean;
}
/*
  MAIN
  @TEX
*/
const CardComicsChar: React.FC<Props> = ({
  title,
  image,
  description,
  id,
  search,
  liked,
}: Props) => {
  const dispatch = useDispatch();
  const likeOrDeslike = (data: likeCharComics) => {
    dispatch(likeCharComicAction(data));
  };
  return (
    <Father>
      <Favor
        onClick={() =>
          likeOrDeslike({
            type: search,
            id,
            name: title,
            thumb: image,
            like: liked,
          })
        }
      >
        <span>
          {liked ? <AiFillStar size={24} /> : <AiOutlineStar size={24} />}
        </span>
      </Favor>
      <Link to={`/${search}/${id}`}>
        <Card>
          <Img src={image} alt="none" />
          <span />
          <Content>
            <h1>{title}</h1>
            <p>{description}</p>
          </Content>
        </Card>
      </Link>
    </Father>
  );
};
export default CardComicsChar;
