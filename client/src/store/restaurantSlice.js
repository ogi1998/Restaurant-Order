import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [],
  activeRestaurant: {
    id: '',
    name: '',
    meals: []
  }
};

const restaurantSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    fetchRestaurants(state, action) {
      state.restaurants = action.payload.restaurants;
    },
    fetchMeals(state, action) {
      state.activeRestaurant.id = action.payload.id;
      state.activeRestaurant.name = action.payload.name;
      state.activeRestaurant.meals = action.payload.meals;
    }
  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice;
