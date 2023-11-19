import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://russianwarship.rip/api/v2';

export const getData = createAsyncThunk(
  'stats/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/statistics/latest');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTerms = createAsyncThunk(
  'stats/fetchTerms',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/terms/en');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCurrentDay = createAsyncThunk(
  'stats/fetchCurrent',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/war-info');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const getDataByDate = createAsyncThunk(
    'stats/fetchDataByDate',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`/statistics/${day}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
