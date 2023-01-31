import ListingPage from './pages/Listing.page';
import React, { type ReactElement } from 'react';
interface IRoutes {
  path: string;
  element: ReactElement;
}
const routes: IRoutes[] = [
  {
    path: '/',
    element: <ListingPage />,
  },
];

export default routes;
