/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillStar, AiFillAccountBook, AiOutlineLogout } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/store';
/*
  Componentes styles
*/
export const Button = styled.button`
  span {
    margin-left: 3px;
    font-weight: 600;
  }

  border: 1px solid ${(p) => p.theme.colors.primary.main};
  color: ${(p) => p.theme.colors.secondary.main};
  padding: 0 20px;
  height: 80px;
  background: ${(p) => p.theme.colors.primary.main};
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
    -webkit-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
    -moz-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
    box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
  }
`;

const DropDownContent = styled.div`
  border: 1px solid ${(p) => p.theme.colors.primary.main};
  background-color: ${(p) => p.theme.colors.black};
  color: ${(p) => p.theme.colors.primary.main};
  -webkit-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
  -moz-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
  box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
  position: absolute;
  display: none;
  min-width: 160px;
  padding: 10px;
  z-index: 1;
  transition: 0.3s;
  right: 0;
  a {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: ${(p) => p.theme.colors.primary.main};
    border-radius: 6px;
    padding: 9px 9px;
    text-decoration: none;
    display: block;
    border: none;
    transition: 0.3s;
    :hover {
      background-color: ${(p) => p.theme.colors.secondary.main};
      color: ${(p) => p.theme.colors.primary.main};
      -webkit-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
      -moz-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
      box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
      transition: 0.3s;
    }
  }
`;
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  :hover ${DropDownContent} {
    display: block;
    transition: 0.3s;
  }
`;

/*
  Componentes props
*/
/*
  MAIN
  @TEX
*/
const Avatar: React.FC = () => {
  const { nick } = useSelector((state: ApplicationState) => state.user);
  const handleLogout = () => {
    localStorage.removeItem('@authorization');
  };
  return (
    <>
      <DropDown>
        <Button>
          <span>{`Olá, ${nick}`}</span>
        </Button>
        <DropDownContent>
          <Link to="/user/acc">
            <AiFillAccountBook size={16} />
            Ver conta
          </Link>
          <Link to="/user/fav">
            <AiFillStar size={16} />
            Ver Favoritos
          </Link>
          <Link to="/" onClick={() => handleLogout()}>
            <AiOutlineLogout size={16} />
            Logout
          </Link>
        </DropDownContent>
      </DropDown>
    </>
  );
};

export default Avatar;
