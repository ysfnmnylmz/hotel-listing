import React from 'react';
import type { FC } from 'react';
import { Card } from 'antd';
import HorizontalHotelCardInner from './HorizontalHotelCardInner';
import cn from 'classnames';
import './HotelCard.scss';
import { type IHotel } from './hotel.interface';

interface HotelCardProps {
  data: IHotel | any;
}
const HotelCard: FC<HotelCardProps> = ({ data }) => {
  return (
    <Card style={{ marginTop: 16 }} className={cn('hotel-card-wrapper')}>
      <HorizontalHotelCardInner hotelInfo={data} />
    </Card>
  );
};

export default HotelCard;
