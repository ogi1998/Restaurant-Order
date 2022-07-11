import { userActions } from "./userSlice";
import { uiActions } from "./uiSlice";

export const loginUser = userEl => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch('/user/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(userEl)
            });

            const data = await response.json();
            return data;
        }

        const data = await sendRequest();
            if (data.status === 'error') {
                dispatch(uiActions.addLoginRegisterError({
                    error: data.message
                }));
            } else {
                dispatch(userActions.createUser({
                    user: data.user,
                    token: data.token
                }));
                sessionStorage.setItem('user', JSON.stringify(data.user));
                sessionStorage.setItem('token', data.token);
            }
    }
};

export const registerUser = userEl => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch('/user/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(userEl)
            });

            const data = await response.json();
            return data;
        }
        const data = await sendRequest();

        if (data.status === 'error') {
            dispatch(uiActions.addLoginRegisterError({
                error: data.message
            }));
        } else {
            dispatch(userActions.createUser({
                user: data.user,
                token: data.token
            }));
            sessionStorage.setItem('user', JSON.stringify(data.user));
            sessionStorage.setItem('token', data.token);
        }
    }
};