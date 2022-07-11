import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { uiActions } from "../../store/uiSlice";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const addToCart = async (cart) => {
  const response = await fetch("/transaction", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onBuyHandler = async () => {
    const transaction = {
      user: user.user._id,
      totalQuantity: cart.quantity,
      totalAmount: cart.totalAmount,
      restaurants: cart.items.map((item) => 
        item = {
          restaurantId: item.restaurant_id,
          meals: item.meals.map((meal) => 
            meal = { mealId: meal._id, quantity: meal.quantity },
          ),
        },
      ),
    };
    addToCart(transaction)
    .then(data => console.log(data));
    dispatch(cartActions.clearCart());
    dispatch(uiActions.hideForm());
  };

  return (
    <div className={classes.cart}>
      {cart.items.map((item) => {
        return (
          <CartItem
            meals={item.meals}
            name={item.restaurant_name}
            key={item.restaurant_id}
          />
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
          className={`${classes.cart__button} ${classes.cart__button__red}`}>
          Clear Cart
        </button>
        <button className={`${classes.cart__button} ${classes.cart__button__blue}`} onClick={onBuyHandler}>Make an Order</button>
      </div>
    </div>
  );
};

export default Cart;
