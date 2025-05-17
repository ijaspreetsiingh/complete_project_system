import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  selectedPlan: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    selectPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    googleLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    }
  }
});

export const { login, register, logout, setError, selectPlan, googleLogin } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectCurrentPlan = (state) => state.auth.selectedPlan;
export const selectAuthStatus = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;