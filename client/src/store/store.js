import {configureStore} from '@reduxjs/toolkit';
import restaurantSlice from './restaurantSlice';
import uiSlice from './uiSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    restaurant: restaurantSlice.reducer
  }
});

export default store;

