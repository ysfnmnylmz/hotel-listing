import React, { type FC } from 'react';
import { Pagination } from 'antd';

const ListingFooter: FC = () => {
  return <Pagination defaultCurrent={1} total={50} />;
};

export default ListingFooter;
