import {createSlice} from '@reduxjs/toolkit';
import {getDataByDate} from '../fetch/api';

const dateSlice = createSlice({
  name: 'date',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getDataByDate.pending]: (state, action) => {
      state.error = null;
    },
    [getDataByDate.fulfilled]: (state, action) => {
      state = action.payload;
    },
    [getDataByDate.error]: (state, action) => {
      state.error = true;
    },
  },
});

// export const {changeDate} = dateSlice.actions;

export default dateSlice.reducer;
