import React, { type FC } from 'react';
import cn from 'classnames';
import { Image, Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import placeholder from 'assets/images/hotel-placeholder.webp';
const { Title, Text } = Typography;
const HorizontalHotelCardInner: FC = () => {
  return (
    <div className={cn('hotel-card-inner', 'horizontal')}>
      <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} className={cn('remove-hotel-button')} />
      <div className={cn('hotel-card-inner-image')}>
        <Image className={cn('hotel-image')} src={placeholder} />
      </div>
      <div className={cn('hotel-card-inner-info')}>
        <div className={cn('hotel-card-inner-info-typography-wrapper')}>
          <Title level={5} className={cn('hotel-card-inner-info-typography-wrapper-title')}>
            Hotel Title
          </Title>
          <div className={cn('hotel-card-inner-info-typography-wrapper-points')}>
            <Text type="success">9.5 Puan</Text>
          </div>
        </div>
        <div className={cn(['hotel-card-inner-info-actions'])}>
          <Button type="primary" className={cn('action-button')}>
            Puan Arttır
          </Button>
          <Button type="primary" className={cn('action-button')}>
            Puan Azalt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalHotelCardInner;
