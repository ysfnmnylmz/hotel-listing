import React, { type FC } from 'react';
import { List } from 'antd';
import HotelCard from 'components/cards/HotelCard';
import { useSelector } from 'react-redux';
import ListingFooter from './ListingFooter';
import cn from 'classnames';
import DeleteModal from 'components/modals/DeleteModal';
import ListingHeader from './ListingHeader';

const Listing: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const hotels = useSelector(({ hotels }: any) => hotels);
  const { items, pagination } = hotels;
  return (
    <React.Fragment>
      <List
        className={cn('hotel-list')}
        size="large"
        header={<ListingHeader />}
        footer={<ListingFooter />}
        dataSource={items.slice((pagination.currentPage - 1) * 5, pagination.currentPage * 5)}
        renderItem={item => <HotelCard data={item} />}
      />
      <DeleteModal />
    </React.Fragment>
  );
};

export default Listing;
