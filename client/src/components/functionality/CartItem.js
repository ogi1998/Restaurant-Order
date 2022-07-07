import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <>
    <h2 className={classes.cart__restaurant}>{props.name}</h2>
    <ul className={classes.cart__items}>
      {props.meals.map((meal) => (
        <li className={classes.cart__item} key={meal._id}>
          {meal.name} <span className={classes.cart__item__price}>{meal.price}$</span><span> x{meal.quantity}</span>
        </li>
      ))}
    </ul>
  </>
  )
}
export default CartItem