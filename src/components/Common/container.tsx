import styled from 'styled-components';

export const ContainerLayout = styled.div`
  width: ${(p) => p.theme.screen.xl};
  height: auto;
  color: #333;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 1400px) {
    width: ${(p) => p.theme.screen.md};
  }
  @media (max-width: 1000px) {
    width: ${(p) => p.theme.screen.sm};
  }
`;

export const ContainerLogin = styled.div`
  width: ${(p) => p.theme.screen.xl};
  height: auto;
  color: #333;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 1400px) {
    width: ${(p) => p.theme.screen.md};
  }
  @media (max-width: 1000px) {
    width: ${(p) => p.theme.screen.sm};
  }
`;
