import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      if (state.items.length) {
        const restaurantIndex = state.items.findIndex(
          (item) => item.restaurant_id === action.payload.restaurant_id
        );

        if (restaurantIndex === -1) {
          state.items.push({
            restaurant_id: action.payload.restaurant_id,
            restaurant_name: action.payload.restaurant_name,
            meals: [{ ...action.payload.meal, quantity: 1 }],
          });
          state.totalAmount += action.payload.meal.price;
        } else {
            const mealIndex = state.items[restaurantIndex].meals.findIndex(meal => meal._id === action.payload.meal._id);

            if (mealIndex === -1) {
                state.items[restaurantIndex].meals.push({
                    ...action.payload.meal, quantity: 1
                })
                state.totalAmount += action.payload.meal.price;
            } else {
                state.items[restaurantIndex].meals[mealIndex].quantity += 1;
                state.totalAmount += state.items[restaurantIndex].meals[mealIndex].price;
            }
        }
      } else {
        state.items.push({
          restaurant_id: action.payload.restaurant_id,
          restaurant_name: action.payload.restaurant_name,
          meals: [{ ...action.payload.meal, quantity: 1 }],
        });
        state.totalAmount += action.payload.meal.price;
      }
      state.quantity += 1;
    },
    clearCart(state) {
        state.items = [];
        state.quantity = 0;
        state.totalAmount = 0;
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
