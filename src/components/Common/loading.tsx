import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = styled.div`
  margin: 0 auto;
  padding: 100px 0;
`;
export default function CircularIndeterminate() {
  return (
    <Loading>
      <CircularProgress />
    </Loading>
  );
}
