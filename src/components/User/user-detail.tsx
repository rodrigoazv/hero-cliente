import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAction } from '../../store/ducks/user/actions';

import RegisterOrUpdate from '../Auth/registerOrUpdate';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  span {
    padding: 3px;
    margin: 3px 0px 5px 2px;
    color: grey;
  }
`;

/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <Content>
      <RegisterOrUpdate isUpdate />
    </Content>
  );
};
export default HomePage;
