import React, { type FC } from 'react';
import { List } from 'antd';
import HotelCard from 'components/cards/HotelCard';
import { useSelector } from 'react-redux';
import ListingFooter from './ListingFooter';
import cn from 'classnames';
import DeleteModal from 'components/modals/DeleteModal';

const Listing: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const hotels = useSelector(({ hotels }: any) => hotels);
  const { items } = hotels;
  return (
    <React.Fragment>
      <List
        className={cn('hotel-list')}
        size="large"
        footer={<ListingFooter />}
        dataSource={items}
        renderItem={item => <HotelCard />}
      />
      <DeleteModal />
    </React.Fragment>
  );
};

export default Listing;
