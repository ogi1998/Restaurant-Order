import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        items: [],
        totalAmount: 0,
        quantity: 0
    }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
        if(state.cart.items.length) {
            // To Do

        } else {
            state.cart.items.push({
                restaurant_id: action.payload.id,
                restaurant_name: action.payload.name,
                meals: action.payload.meals
            })
        }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;