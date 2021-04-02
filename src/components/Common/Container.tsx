import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  max-width: 100%;
  color: #333;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;
  @media (max-width: 1600px) {
    max-width: 70%;
  }
  @media (max-width: 1200px) {
    max-width: 50%;
  }
`;
