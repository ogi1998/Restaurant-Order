import {restaurantActions} from './restaurantSlice';
import { uiActions } from "./uiSlice";

export const getRestaurants = token => {
    return async dispatch => {

        const sendRequest = async () => {
            const response = await fetch('http://localhost:5000/restaurant', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            return data;

        };
        const data = await sendRequest();

            if (data.status === 'error') {
                dispatch(uiActions.addRestaurantError({
                    error: data.message
                }));
            } else {
                dispatch(restaurantActions.fetchRestaurants({
                    restaurants: data.data
                }));
            }
    }
};