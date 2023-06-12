import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, DarkTheme } from 'styles/theme';
import { GlobalStyle, media } from 'styles';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from 'atom';

const queryClient = new QueryClient();

export default function App() {
  const darkMode = useRecoilValue(isDarkAtom);
  const theme = darkMode ? { ...DarkTheme, ...media } : { ...Theme, ...media };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Outlet />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
