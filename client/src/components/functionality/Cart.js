import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import {uiActions} from '../../store/uiSlice';

import classes from './Cart.module.css';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={classes.cart}>
      {cart.items.map((item) => {
        return (
          <>
            <h2 className={classes.cart__restaurant}>{item.restaurant_name}</h2>
            <ul className={classes.cart__items}>
              {item.meals.map((meal) => (
                <li className={classes.cart__item}>
                  {meal.name} <span>x{meal.quantity}</span>
                </li>
              ))}
            </ul>
          </>
        );
      })}
      <br />
      <br />
      <div className={classes.cart__footer}>
        <div className={classes.cart__total__quantity}>
          Total Quantity: {cart.quantity}
        </div>
        <div className={classes.cart__total__amount}>
          Total Amount: ${cart.totalAmount}
        </div>
      </div>
      <div className={classes.cart__button__container}>
        <button
          onClick={() => {
            dispatch(cartActions.clearCart());
            dispatch(uiActions.hideForm());
          }}
          className={classes.cart__button}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
