import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginRegisterFormType: '',
  loginRegisterError: '',
  restaurantError: ''
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
    hideForm(state) {
      state.loginRegisterFormType = '';
      state.loginRegisterError = '';
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
