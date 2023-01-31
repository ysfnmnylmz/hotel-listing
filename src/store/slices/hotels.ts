import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [1],
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
    setHotels: (state, { payload }) => {
      state.items = payload;
      state.pagination = {
        ...state.pagination,
        count: payload.length,
        totalPage: Math.ceil(payload.length / state.pagination.size),
      };
    },
    changePagination: (state, { payload }) => {
      if (payload.selectedPageNumber) {
        state.pagination.currentPage = payload.selectedPageNumber;
        return;
      }
      if (payload.type === 'next' && state.pagination.currentPage < state.pagination.totalPage) {
        state.pagination.currentPage = state.pagination.currentPage + 1;
      }
      if (payload.type === 'prev' && state.pagination.currentPage > 1) {
        state.pagination.currentPage = state.pagination.currentPage - 1;
      }
    },
  },
});

const { actions, reducer } = hotelsSlice;
export const { setHotels } = actions;
export default reducer;
