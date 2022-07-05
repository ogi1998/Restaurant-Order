import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import restaurantSlice from './restaurantSlice';
import uiSlice from './uiSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    restaurant: restaurantSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;

