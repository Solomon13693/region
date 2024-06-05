import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const profile = Cookies.get('profile') || null;
const user = JSON.parse(profile)

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    token: Cookies.get('token') || '',
    profile: user || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.profile = action.payload;
    },
    Logout: (state) => {
      state.token = null,
        state.profile = null
      Cookies.remove('token')
      Cookies.remove('token_exp')
      Cookies.remove('profile')
    }
  },
});

export const { setToken, setUser, Logout } = AuthSlice.actions;
export const getProfile = (state) => state.auth.profile;
export const getToken = (state) => state.auth.token;

export default AuthSlice.reducer;
