import React, { type FC } from 'react';
import AppLayout from 'components/layout';
import AddHotelForm from 'components/forms/AddHotelForm';

const AddPage: FC = () => {
  return (
    <AppLayout>
      <AddHotelForm />
    </AppLayout>
  );
};

export default AddPage;
