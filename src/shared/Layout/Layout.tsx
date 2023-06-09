import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import { DarkModeBtn } from 'components/DarkModeBtn';

export function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <Wrapper>
          <Outlet />
          <DarkModeBtn />
        </Wrapper>
      </Suspense>
    </>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3.125rem 10px;
`;
