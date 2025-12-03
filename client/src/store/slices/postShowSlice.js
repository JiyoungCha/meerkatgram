import { createSlice } from '@reduxjs/toolkit'
import { postShowThunk } from '../thunks/postShowThunk.js';

const initialState = {
  data: null,  
}

const slice = createSlice({
  name: 'postShow',
  initialState, 
  reducers: {
    clearPostShow(state) {
      state.data = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postShowThunk.fulfilled, (state, action) => {
        state.data = action.payload.data;

      })
  },
});

export const {
  clearPostShow,
} = slice.actions;

export default slice.reducer;