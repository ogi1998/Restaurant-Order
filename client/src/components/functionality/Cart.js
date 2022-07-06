import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import {uiActions} from '../../store/uiSlice';

import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={classes.cart}>
      {cart.items.map((item) => {
        return (
          <CartItem meals={item.meals} name={item.restaurant_name} />
        );
      })}
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
