import { createSlice } from '@reduxjs/toolkit';
import sortHotels from '../../helpers/sortHotels';

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
    addHotel: (state, { payload }) => {
      state.items.push(payload);
      state.pagination.count = state.pagination.count + 1;
      state.pagination.totalPage = Math.ceil(state.items.length / state.pagination.size);
      state.items = sortHotels(state.items, state.sortBy);
    },
    selectHotel: (state, { payload }) => {
      state.selectedHotel = payload;
    },
    removeHotel: (state, { payload }) => {
      state.items = state.items.filter(x => x.id !== payload);
    },
    increaseHotelPoint: (state, { payload }) => {
      const hotelIndex = state.items.findIndex(x => x.id === payload.id);
      state.items[hotelIndex] = {
        ...state.items[hotelIndex],
        points: state.items[hotelIndex].points + payload.point,
        updatedAt: Date.now(),
      };
      state.items = sortHotels(state.items, state.sortBy);
    },
    decreaseHotelPoint: (state, { payload }) => {
      const hotelIndex = state.items.findIndex(x => x.id === payload.id);
      state.items[hotelIndex] = {
        ...state.items[hotelIndex],
        points: state.items[hotelIndex].points - payload.point,
        updatedAt: Date.now(),
      };
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
