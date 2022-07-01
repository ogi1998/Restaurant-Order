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

            sessionStorage.removeItem('user');
            sessionStorage.removeItem('token');
        },
        getUserFromSession(state) {
            if(sessionStorage.getItem('token') != null) {
                state.user = JSON.parse(sessionStorage.getItem('user'));
                state.token = sessionStorage.getItem('token');
                state.isLoggedIn = true;

            }
        }

    }
});

export const userActions = userSlice.actions;

export default userSlice;




