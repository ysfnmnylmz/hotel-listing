import React from 'react';
import type { FC } from 'react';
import { Card } from 'antd';
import HorizontalHotelCardInner from './HorizontalHotelCardInner';
import cn from 'classnames';
import './HotelCard.scss';
const HeroCard: FC = () => {
  return (
    <Card style={{ marginTop: 16 }} className={cn('hotel-card-wrapper')}>
      <HorizontalHotelCardInner />
    </Card>
  );
};

export default HeroCard;
