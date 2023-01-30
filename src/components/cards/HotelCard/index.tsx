import React from 'react';
import type { FC } from 'react';
import { Card } from 'antd';
import HorizontalHotelCardInner from './HorizontalHotelCardInner';
const Index: FC = () => {
  return (
    <Card style={{ marginTop: 16 }}>
      <HorizontalHotelCardInner />
    </Card>
  );
};

export default Index;
