import classes from './RestaurantItem.module.css';

const RestaurantItem = (props) => {
  return (
    <div className={classes.restaurant__item}>
      <img className={classes.restaurant__image} src={`http://localhost:5000${props.img}`} alt={props.name} />
      <div className={classes.restaurant__content}>
      <h3 className={classes.restaurant__title}>{props.title}</h3>
      <p className={classes.restaurant__desc}>{props.desc}</p>
      <span className={classes.restaurant__price}>Delivery price: {props.deliveryPrice}$</span>
      <span className={classes.restaurant__delivery__time}>Delivery time: {props.deliveryTime}</span>
      <span className={classes.restaurant__work__time}>Working time: {props.workStart} - {props.workEnd}</span>
      </div>

    </div>
  );
};
export default RestaurantItem;
