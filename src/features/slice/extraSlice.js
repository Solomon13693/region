import { createSlice } from '@reduxjs/toolkit';

const extraSlice = createSlice({
  name: 'extra',
  initialState: {
    wallet: null,
  },
  reducers: {
    setAnalytics: (state, action) => {
      state.wallet =  action.payload
    }
  },
});

export const {
    setPlans,
    setAnalytics,
    setConfig
} = extraSlice.actions;

export const getWallet = (state) => state.extra.wallet;

export default extraSlice.reducer;
