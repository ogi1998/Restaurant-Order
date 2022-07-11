import {restaurantActions} from './restaurantSlice';
import { uiActions } from "./uiSlice";

export const getRestaurants = token => {
    return async dispatch => {

        const sendRequest = async () => {
            const response = await fetch('/restaurant', {
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

export const getMeals = (token, id) => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch(`/restaurant/${id}/meals`, {
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
            console.log(data);
        } else {
            dispatch(restaurantActions.fetchMeals({
                id: data.data._id,
                name: data.data.name,
                meals: data.data.meals
            }));
        }
    }
};