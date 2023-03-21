import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HTTP from 'utils/http_common';

const initialState = {
  data: [],
  error: '',
  status: 'idle',
  favorites: [],
};

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  try {
    const response = await HTTP.get(
      `${process.env.REACT_APP_BASE_URL}coins?skip=0&currency=MXN`,
    );
    return response.data.coins;
  } catch (e) {
    return [];
  }
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setFavorites: (state, { payload }) => {
      const favorites = localStorage.getItem('favorites_coins');
      let stateCoins = favorites ? favorites.split(',') : [];
      if (stateCoins.some((coin) => coin === payload)) {
        stateCoins = stateCoins.filter((coin) => coin !== payload);
      } else {
        stateCoins = [...stateCoins, payload];
      }
      localStorage.setItem('favorites_coins', stateCoins.filter((coin) => coin !== '').toString());
      state.favorites = stateCoins.filter((coin) => coin !== '');
    },
    getFavorites: (state) => {
      // eslint-disable-next-line no-prototype-builtins
      if (localStorage.hasOwnProperty('favorites_coins')) {
        const favorites = localStorage.getItem('favorites_coins');
        state.favorites = favorites.split(',');
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCoins.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
      });
  },
});

export const { setFavorites, getFavorites } = coinsSlice.actions;
export default coinsSlice.reducer;
