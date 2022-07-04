import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginRegisterFormType: '',
  loginRegisterError: '',
  restaurantError: '',
  showCart: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSignIn(state) {
      state.loginRegisterFormType = 'signin';
    },
    showSignUp(state) {
      state.loginRegisterFormType = 'signup';
    },
    showCart(state) {
      state.showCart = true;
    },
    hideForm(state) {
      state.loginRegisterFormType = '';
      state.loginRegisterError = '';
      state.showCart = false;
    },
    addLoginRegisterError(state, action) {
      state.loginRegisterError = action.payload.error
    },
    addRestaurantError(state, action) {
      state.restaurantError = action.payload.error
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
