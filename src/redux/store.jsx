import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import uiReducer from './uiSlice';
import leadsReducer from './leadsSlice';
import teamReducer from './teamSlice';
import funnelReducer from './funnel';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    leads: leadsReducer,
    team: teamReducer,
     funnel: funnelReducer,
  },
});