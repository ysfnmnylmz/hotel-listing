import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleteModal: false,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleDeleteModel: (state, { payload }) => {
      state.deleteModal = payload;
    },
  },
});

const { actions, reducer } = generalSlice;
export const { toggleDeleteModel } = actions;
export default reducer;
