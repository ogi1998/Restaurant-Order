import classes from './MealsItem.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const MealsItem = (props) => {

  return (
    <div className={classes.meal}>
        <h3 className={classes.meal__name}>{props.name}</h3>
        <p className={classes.meal__description}>{props.desc}</p>
        <div className={classes.meal__ingredients}>
            {props.ingredients.map((ingredient, index) => <span className={classes.meal__ingredients__item} key={index}>{ingredient}</span>)}
        </div>
        <div className={classes.meal__categories}>
            {props.categories.map((category,index) => <span className={classes.meal__ingredients__item} key={index}>{category}</span>)}
        </div>
        <span className={classes.meal__price}>Price: {props.price}$</span>
        <span className={classes.meal__btn__add}><FontAwesomeIcon icon={faPlus} /></span>
    </div>
  )
}

export default MealsItem