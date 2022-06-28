import classes from './Offers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faBowlFood,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

import imgPlate1 from '../../img/landing/6.png';
import imgPlate2 from '../../img/landing/7.png';
import imgPlate3 from '../../img/landing/8.png';

const Offers = () => {

  return (
    <section className={classes.offers}>
      <div className={classes.offers__item}>

        <h2 className={classes.offers__title}>Cheap Prices </h2>
        <FontAwesomeIcon className={classes.offers__icon} icon={faAward} />
        <p className={classes.offers__description}>
          Speed ​​is our point of pride. Order or send anything to your city and
          we'll pick it up and deliver it to you within minutes. Speed ​​is our
          point of pride. Order or send anything to your city and we'll pick it
          up and deliver it to you within minutes.
        </p>
        <img className={classes.offers__img} src={imgPlate1} alt="Plate 1" />
      </div>
      <div className={classes.offers__item}>

        <h2 className={classes.offers__title}>Best Restaurants</h2>
        <FontAwesomeIcon className={classes.offers__icon} icon={faTrophy} />
        <p className={classes.offers__description}>
          Speed ​​is our point of pride. Order or send anything to your city and
          we'll pick it up and deliver it to you within minutes. Speed ​​is our
          point of pride. Order or send anything to your city and we'll pick it
          up and deliver it to you within minutes.
        </p>
        <img className={classes.offers__img} src={imgPlate2} alt="Img" />
      </div>
      <div className={classes.offers__item}>

        <h2 className={classes.offers__title}>Fast Delivery</h2>
        <FontAwesomeIcon className={classes.offers__icon} icon={faBowlFood} />
        <p className={classes.offers__description}>
          Speed ​​i s our point of pride. Order or send anything to your city and
          we'll pick it up and deliver it to you within minutes. Speed ​​is our
          point of pride. Order or send anything to your city and we'll pick it
          up and deliver it to you within minutes.
        </p>
        <img className={classes.offers__img} src={imgPlate3} alt="Img" />
      </div>
    </section>
  );
};
export default Offers;
