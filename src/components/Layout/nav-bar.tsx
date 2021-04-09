/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../styles/assets/logo.svg';
import Avatar from '../Common/avatar';
import { ContainerLayout } from '../Common/container';
import { ApplicationState } from '../../store';
import { refetchCharComicLikeAction } from '../../store/ducks/user/actions';

/*
  Componentes style
*/
interface PropsStyles {
  size?: number;
}

export const NavBar = styled.header`
  height: 80px;
  width: 100%;
  color: #333;
  background-color: ${(p) => p.theme.colors.black};
  align-items: center;
`;

const GroupAvatar = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
`;

const GroupMessage = styled.div`
  height: auto;
  color: #fff;
  margin: 30px 0;
`;

const Logos = styled.img<PropsStyles>`
  align-item: center;
  margin: 8px 0;
  height: ${(p) => (p.size ? `${p.size}px` : '64px')};
`;
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
  const { message } = useSelector((state: ApplicationState) => state.notify);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message.successType === 'like' || message.successType === 'auth') {
      dispatch(refetchCharComicLikeAction());
    }
  }, [message]);
  return (
    <NavBar>
      <ContainerLayout>
        <GroupMessage>
          <b>Bem vindo</b> ao Super!
        </GroupMessage>
        <Link to="/home">
          <Logos src={Logo} />
        </Link>

        <GroupAvatar>
          <Avatar size={48} />
        </GroupAvatar>
      </ContainerLayout>
    </NavBar>
  );
};
export default HomePage;
