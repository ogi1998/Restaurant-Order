import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: '',
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

    }
});

export const userActions = userSlice.actions;

export default userSlice;




