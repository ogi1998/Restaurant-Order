import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginRegisterFormType: '',
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
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
