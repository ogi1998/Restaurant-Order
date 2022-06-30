import { userActions } from "./userSlice";
import { uiActions } from "./uiSlice";

export const loginUser = userEl => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:5000/user/login', {
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
            dispatch(uiActions.addError({
                error: data.message
            }));
        } else {
            dispatch(userActions.createUser({
                user: data.user,
                token: data.token
            }));
        }
    }
};

export const registerUser = userEl => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(userEl)
            });

            const data = await response.json();
            console.log(data);

            return data;
        }

        const data = await sendRequest();

        if (data.status === 'error') {
            dispatch(uiActions.addError({
                error: data.message
            }));
        } else {
            dispatch(userActions.createUser({
                user: data.user,
                token: data.token
            }));
        }
    }
};