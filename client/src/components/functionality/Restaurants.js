import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRestaurants } from '../../store/restaurantActions';
import { uiActions } from '../../store/uiSlice';

import RestaurantItem from './RestaurantItem';

import classes from './Restaurants.module.css';

const Restaurants = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token);

  const restaurants = useSelector(state => state.restaurant.restaurants);

  useEffect(() => {
    dispatch(getRestaurants(token));
    dispatch(uiActions.hideForm());
  }, [dispatch, token]);
  return (
    <main className={classes.restaurants}>
    <h2 className={classes.restaurants__title}>Available Restaurants</h2>
      <div className={classes.restaurants__list}>
        {restaurants.length && restaurants.map(item => <RestaurantItem 
        img={item.imagePath}
        title={item.name}
        desc={item.description}
        deliveryPrice={item.deliveryPrice}
        deliveryTime={item.deliveryTime}
        workStart={item.workStart}
        workEnd={item.workEnd}

        />)}
      </div>
    </main>
  )
}
export default Restaurants