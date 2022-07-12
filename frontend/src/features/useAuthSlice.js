import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApiSlice } from './userApiSlice';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

export const getUser = createAsyncThunk('usuario/user', async (token) => {
  const response = await fetch('http://localhost:5000/usuarios/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
});

const useAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.usuario;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(
        userApiSlice.endpoints.signIn.matchFulfilled,
        (state, action) => {
          state.user = action.payload.usuario;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        }
      );
  },
});

export const { logOut } = useAuthSlice.actions;
export default useAuthSlice.reducer;
export const selectAuth = (state) => state.auth;