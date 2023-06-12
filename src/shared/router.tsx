import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from 'App';

import { Layout, NotFound } from 'shared/Layout';
import { SignUp, TodoList } from 'pages';

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
              element: <TodoList />,
            },
            {
              path: 'sinup',
              element: <SignUp />,
            },
          ],
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
