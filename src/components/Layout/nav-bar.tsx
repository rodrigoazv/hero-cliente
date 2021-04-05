/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import Logo from '../../styles/assets/logo.svg';
import Avatar from '../Common/avatar';
import { ContainerLayout } from '../Common/container';

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
  background-color: #313131;
  align-items: center;
`;

const GroupAvatar = styled.div`
  height: auto;
  color: #fff;
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
const HomePage: React.FC = () => (
  <NavBar>
    <ContainerLayout>
      <GroupMessage>
        <b>Bem vindo</b> ao Super!
      </GroupMessage>
      <Logos src={Logo} />
      <GroupAvatar>
        <Avatar size={48} />
      </GroupAvatar>
    </ContainerLayout>
  </NavBar>
);
export default HomePage;
