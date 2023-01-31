import React, { type FC } from 'react';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';

const ListingFooter: FC = () => {
  const hotelState = useSelector(({ hotels }: any) => hotels);
  const { pagination } = hotelState;
  return <Pagination defaultCurrent={pagination.currentPage} total={pagination.totalPage} />;
};

export default ListingFooter;
