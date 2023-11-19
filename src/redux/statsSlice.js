import {createSlice} from '@reduxjs/toolkit';
import {getCurrentDay, getData, getTerms} from '../fetch/api';

const storeSlice = createSlice({
  name: 'stats',
  initialState: {
    data: [],
    terms: [],
    error: false,
    currentDay: '',
  },
  reducers: {
    addStats(state, action) {
      state = action.payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.error = null;
    },
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getData.error]: (state, action) => {
      state.error = true;
    },
    [getTerms.pending]: (state, action) => {
      state.error = null;
    },
    [getTerms.fulfilled]: (state, action) => {
      state.terms = action.payload;
    },
    [getTerms.error]: (state, action) => {
      state.error = true;
    },
    [getCurrentDay.pending]: (state, action) => {
      state.error = null;
    },
    [getCurrentDay.fulfilled]: (state, action) => {
      state.currentDay = action.payload;
    },
    [getCurrentDay.error]: (state, action) => {
      state.error = true;
    },
    
  },
});

export const {addStats} = storeSlice.actions;

export default storeSlice.reducer;
