import React from 'react';
import type { FC } from 'react';
import { Card } from 'antd';
import HorizontalHotelCardInner from './HorizontalHotelCardInner';
import cn from 'classnames';
import './HotelCard.scss';
const HeroCard: FC = ({ data }: any) => {
  return (
    <Card style={{ marginTop: 16 }} className={cn('hotel-card-wrapper')}>
      <HorizontalHotelCardInner hotelInfo={data} />
    </Card>
  );
};

export default HeroCard;
