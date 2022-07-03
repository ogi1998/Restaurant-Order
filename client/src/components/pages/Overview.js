import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRestaurants } from '../../store/restaurantActions';
import { uiActions } from '../../store/uiSlice';

const Overview = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token);

  const restaurants = useSelector(state => state.restaurant.restaurants);

  useEffect(() => {
    dispatch(getRestaurants(token));
    dispatch(uiActions.hideForm());
  }, []);


  
  return (
    <div>
      {restaurants.length && restaurants.map(item => <h1>{item.name}</h1>)}
    </div>
  )
}
export default Overview