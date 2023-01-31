import React, { type FC } from 'react';
import Listing from 'components/listing';
import AppLayout from 'components/layout';

const ListingPage: FC = () => {
  return (
    <AppLayout>
      <Listing />
    </AppLayout>
  );
};

export default ListingPage;
