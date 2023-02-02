import ListingPage from './pages/Listing.page';
import React from 'react';
import AddPage from './pages/Add.page';
import AppLayout from './components/layout';
import { type RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <ListingPage />,
      },
      {
        path: 'otel-ekle',
        element: <AddPage />,
      },
    ],
  },
];

export default routes;
