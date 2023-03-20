import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HTTP from "utils/http_common";

const initialState = {
  data: [],
  error: "",
  status: "idle",
};

export const getCoins = createAsyncThunk("coins/getCoins", async () => {
  try {
    const response = await HTTP.get(
      `${process.env.REACT_APP_BASE_URL}coins?skip=0&currency=MXN`
    );
    return response.data.coins;
  } catch (e) {
    return [];
  }
});

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCoins.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = "success";
      })
  },
});

export default coinsSlice.reducer;
