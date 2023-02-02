import { type IHotel } from 'components/cards/HotelCard/hotel.interface';
const sortHotels = (list: IHotel[], type = 'descend'): any => {
  return list.sort((a: IHotel, b: IHotel) => {
    if (a.points !== b.points) {
      return type === 'descend' ? b.points - a.points : a.points - b.points;
    } else if (a.updatedAt !== b.updatedAt) {
      return new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf();
    } else {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    }
  });
};

export default sortHotels;
