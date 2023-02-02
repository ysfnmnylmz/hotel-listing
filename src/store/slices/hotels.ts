import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import sortHotels from '../../helpers/sortHotels';
import { type IHotel } from '../../components/cards/HotelCard/hotel.interface';
interface IPagination {
  count: number;
  size: number;
  currentPage: number;
  totalPage: number;
}
interface ICount {
  id: string;
  point: number;
}
interface IHotelState {
  items: IHotel[];
  selectedHotel: string;
  sortBy: string;
  pagination: IPagination;
}
const initialState = {
  items: [],
  selectedHotel: null,
  sortBy: 'descend',
  pagination: {
    count: 0,
    size: 5,
    currentPage: 1,
    totalPage: 1,
  },
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    changeSort: (state, { payload }) => {
      state.sortBy = payload;
      state.items = sortHotels(state.items, state.sortBy);
    },
    setHotels: (state, { payload }) => {
      state.items = sortHotels(payload, state.sortBy);
      state.pagination = {
        ...state.pagination,
        count: payload.length,
        totalPage: Math.ceil(payload.length / state.pagination.size),
      };
    },
    changePagination: (state, { payload }) => {
      state.pagination.currentPage = payload;
    },
    addHotel: (state, { payload }: PayloadAction<IHotel>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      state.items.push(payload);
      state.pagination.count = state.pagination.count + 1;
      state.pagination.totalPage = Math.ceil(state.items.length / state.pagination.size);
      state.items = sortHotels(state.items, state.sortBy);
    },
    selectHotel: (state, { payload }) => {
      state.selectedHotel = payload;
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    removeHotel: (state: IHotelState, { payload }: PayloadAction<any>) => {
      state.items = state.items.filter(x => x.id !== payload);
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    increaseHotelPoint: (state: IHotelState, { payload }: PayloadAction<ICount>) => {
      const hotelIndex = state.items.findIndex(x => x.id === payload.id);
      state.items[hotelIndex] = {
        ...state.items[hotelIndex],
        points: state.items[hotelIndex].points + payload.point,
        updatedAt: Date.now(),
      };
      state.items = sortHotels(state.items, state.sortBy);
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    decreaseHotelPoint: (state: IHotelState, { payload }: PayloadAction<ICount>) => {
      const hotelIndex = state.items.findIndex(x => x.id === payload.id);
      state.items[hotelIndex].points = state.items[hotelIndex].points - payload.point;
      state.items[hotelIndex].updatedAt = Date.now();
      state.items = sortHotels(state.items, state.sortBy);
    },
  },
});

const { actions, reducer } = hotelsSlice;
export const {
  setHotels,
  addHotel,
  selectHotel,
  removeHotel,
  changePagination,
  increaseHotelPoint,
  decreaseHotelPoint,
  changeSort,
} = actions;
export default reducer;
