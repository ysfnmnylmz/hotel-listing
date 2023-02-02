import React, { type FC } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changePagination } from '../../store/slices/hotels';

const ListingFooter: FC = () => {
  const dispatch = useDispatch();
  const hotelState = useSelector(({ hotels }: any) => hotels);
  const pageChangeHandler = (pageNumber: number): void => {
    dispatch(changePagination(pageNumber));
  };
  const { pagination } = hotelState;
  return (
    <Pagination
      defaultCurrent={pagination.currentPage}
      pageSize={5}
      total={pagination.count}
      onChange={pageChangeHandler}
    />
  );
};

export default ListingFooter;
