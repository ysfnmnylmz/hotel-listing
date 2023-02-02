import React, { type FC } from 'react';
import cn from 'classnames';
import { Image, Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import placeholder from 'assets/images/hotel-placeholder.webp';
import { useDispatch } from 'react-redux';
import { toggleDeleteModel } from 'store/slices/general';
import { decreaseHotelPoint, increaseHotelPoint, selectHotel } from 'store/slices/hotels';
const { Title, Text } = Typography;

interface IHotel {
  points: number;
  name: string;
  id: string;
  image: string;
  createdAt: number;
  updatedAt: number;
}
interface InnerCardProps {
  hotelInfo: IHotel;
}
const HorizontalHotelCardInner: FC<InnerCardProps> = ({ hotelInfo }) => {
  const dispatch = useDispatch();
  const handleDelete: any = async () => {
    await Promise.all([
      Promise.resolve(dispatch(selectHotel(hotelInfo.id))),
      Promise.resolve(dispatch(toggleDeleteModel(true))),
    ]);
  };
  const changeHotelPoint: any = (type: string) => {
    const reqBody = {
      id: hotelInfo.id,
      point: 1,
    };
    type === 'increase' ? dispatch(increaseHotelPoint(reqBody)) : dispatch(decreaseHotelPoint(reqBody));
  };
  return (
    <div className={cn('hotel-card-inner', 'horizontal')}>
      <Button
        onClick={handleDelete}
        type="primary"
        danger
        shape="circle"
        icon={<DeleteOutlined />}
        className={cn('remove-hotel-button')}
      />
      <div className={cn('hotel-card-inner-image')}>
        <Image className={cn('hotel-image')} src={hotelInfo.image ? hotelInfo.image : placeholder} />
      </div>
      <div className={cn('hotel-card-inner-info')}>
        <div className={cn('hotel-card-inner-info-typography-wrapper')}>
          <Title level={5} className={cn('hotel-card-inner-info-typography-wrapper-title')}>
            {hotelInfo.name}
          </Title>
          <div className={cn('hotel-card-inner-info-typography-wrapper-points')}>
            <Text type="success">{`${hotelInfo.points || 'default'} Puan`}</Text>
          </div>
        </div>
        <div className={cn(['hotel-card-inner-info-actions'])}>
          <Button type="primary" className={cn('action-button')} onClick={() => changeHotelPoint('increase')}>
            Puan Arttır
          </Button>
          <Button type="primary" className={cn('action-button')} onClick={() => changeHotelPoint('decrease')}>
            Puan Azalt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalHotelCardInner;
