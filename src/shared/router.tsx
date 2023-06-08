import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from 'App';

import { Layout, NotFound } from 'shared/Layout';
import { Home } from 'pages/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: (
        <Suspense fallback={null}>
          <NotFound />
        </Suspense>
      ),
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
