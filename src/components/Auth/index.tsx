/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../styles/assets/logo.svg';
import Logins from './Login';
import Register from './Register';
import { Container } from '../Common/Container';

interface PropsStyles {
  size?: number;
}

const Banner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  background-color: ${(p) => p.theme.colors.primary.main};
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding: 150px 0 150px 100px;
  span {
    height: 10px;
    padding: 10px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;
const LogoBanner = styled.img<PropsStyles>`
  height: ${(p) => (p.size ? `${p.size}px` : '128px')};
  margin: auto 0;
`;
const Logos = styled.img<PropsStyles>`
  height: ${(p) => (p.size ? `${p.size}px` : '128px')};
`;
const Main = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
/*
  Componentes styles
*/
/*
  Componentes props
*/

/*
  MAIN
  @TEX
*/
const Welcome: React.FC = () => {
  const [haveAcount, setHaveAcount] = useState(true);
  return (
    <Container>
      <Main>
        <Content>
          <Banner>
            <h2>Bem vindo !</h2>
            <LogoBanner size={333} src={Logo} />
          </Banner>
          <Labels>
            <Logos src={Logo} />
            {haveAcount ? (
              <>
                <h2>Bem vindo !</h2>
                <Logins />
                <label>Não tem conta ? sem problemas</label>
                <button type="button" onClick={() => setHaveAcount(false)}>
                  Não possuo uma conta
                </button>
              </>
            ) : (
              <>
                <Register />
                <button type="button" onClick={() => setHaveAcount(true)}>
                  Login
                </button>
              </>
            )}
          </Labels>
        </Content>
      </Main>
    </Container>
  );
};
export default Welcome;
