import { type IHotel } from 'components/cards/HotelCard/hotel.interface';

const getSelectedHotelName = (hotels: IHotel[], id: string | undefined): string => {
  const hotelName = hotels?.find(x => x?.id === id)?.name;
  return hotelName ?? '';
};
export default getSelectedHotelName;
