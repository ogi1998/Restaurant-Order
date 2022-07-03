import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: []
};

const restaurantSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    fetchRestaurants(state, action) {
      state.restaurants = action.payload.restaurants
    }
  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice;
