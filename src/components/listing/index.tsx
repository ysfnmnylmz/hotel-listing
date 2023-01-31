import React, { type FC } from 'react';
import { List } from 'antd';
import HotelCard from 'components/cards/HotelCard';
import { useSelector } from 'react-redux';
import ListingFooter from './ListingFooter';

const Listing: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const hotels = useSelector(({ hotels }: any) => hotels);
  const { items } = hotels;
  return (
    <List
      size="large"
      header={<div>Header</div>}
      footer={<ListingFooter />}
      bordered
      dataSource={items}
      renderItem={item => <HotelCard />}
    />
  );
};

export default Listing;
