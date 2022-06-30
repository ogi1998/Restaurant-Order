import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: '',
    error: '',
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },
        logoutUser(state) {
            state.user = {};
            state.token = '';
            state.isLoggedIn = false;
        }

    }
});

export const userActions = userSlice.actions;

export default userSlice;




