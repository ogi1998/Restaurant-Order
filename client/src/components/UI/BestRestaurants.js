import classes from './BestRestaurants.module.css';

import restaurantImg1 from '../../img/landing/restaurant1.png';
import restaurantImg2 from '../../img/landing/restaurant2.png';
import restaurantImg3 from '../../img/landing/restaurant3.png';

const BestRestaurants = () => {

  return (
    <section className={classes.restaurants}>
      <h1 className={classes.restaurants__title}>Best Restaurants</h1>
      <div className={classes.restaurants__container}>
        <div className={classes.restaurants__item}>
          <h1 className={`${classes.restaurants__item__title} ${classes.restaurants__title__mc}`}>McDonald's</h1>
          <img className={classes.restaurants__img} src={restaurantImg1} alt="Restaurant 1" />
        </div>
        <div className={classes.restaurants__item}>
          <h1 className={`${classes.restaurants__item__title} ${classes.restaurants__title__kfc}`}>KFC</h1>
          <img className={classes.restaurants__img} src={restaurantImg2} alt="Restaurant 2" />
        </div>
        <div className={classes.restaurants__item}>
          <h1 className={`${classes.restaurants__item__title} ${classes.restaurants__title__burger}`}>Burger King</h1>
          <img className={classes.restaurants__img} src={restaurantImg3} alt="Restaurant 3" />
        </div>
      </div>
    </section>
  )
}
export default BestRestaurants