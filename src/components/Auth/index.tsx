/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../styles/assets/logo.svg';
import Logins from './login';
import Register from './register';
import { ContainerLogin } from '../Common/container';

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
  padding: 100px 0 200px 150px;
  @media (max-width: 1400px) {
    padding: 100px 100px 100px 0;
  }
  span {
    padding: 3px;
    margin: 3px 0px 5px 2px;
    color: grey;
  }
  button {
    border: none;
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
  margin: 20px 0;
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
    <ContainerLogin>
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
                <label>
                  Não tem conta ? sem problemas{' '}
                  <button type="button" onClick={() => setHaveAcount(false)}>
                    Não possuo uma conta
                  </button>
                </label>
              </>
            ) : (
              <>
                <h2>Faça seu registro !</h2>
                <Register />
                <label>
                  Já possui conta ? sem problemas{' '}
                  <button type="button" onClick={() => setHaveAcount(true)}>
                    Login
                  </button>
                </label>
              </>
            )}
          </Labels>
        </Content>
      </Main>
    </ContainerLogin>
  );
};
export default Welcome;
