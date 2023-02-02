import ListingPage from './pages/Listing.page';
import React, { type ReactElement } from 'react';
import AddPage from './pages/Add.page';
interface IRoutes {
  path: string;
  element: ReactElement;
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: <ListingPage />,
  },
  {
    path: 'otel-ekle',
    element: <AddPage />,
  },
];

export default routes;
