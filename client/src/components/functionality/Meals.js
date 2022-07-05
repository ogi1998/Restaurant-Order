import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";
import { getMeals } from "../../store/restaurantActions";

import classes from './Meals.module.css';
import MealsItem from "./MealsItem";

const RestaurantDetails = () => {
    const dispatch = useDispatch();

    const {id} = useParams();
    const token = useSelector(state => state.user.token);
    const cart = useSelector(state => state.cart);
    const activeRestaurant = useSelector(state => state.restaurant.activeRestaurant);

    const filteredMeals = {};

    activeRestaurant.meals.forEach(meal => {
        if (filteredMeals[meal.type] === undefined) {
            filteredMeals[meal.type] = [];
        }
        filteredMeals[meal.type].push(meal);
    });

    useEffect(() => {
        dispatch(getMeals(token, id));
    }, [dispatch, id, token]);

    console.log(cart);

    return (
        <div className={classes.meals}>
            <h2 className={classes.meals__title}>{activeRestaurant.name}</h2>
            {filteredMeals.snack && 
                <div className={classes.meals__category}>
                    <h3 className={classes.meals__type}>Snacks</h3>
                    <div className={classes.meals__list}>
                        {filteredMeals.snack.map(meal => <MealsItem
                        name={meal.name}
                        desc={meal.description}
                        ingredients={meal.ingredients}
                        categories={meal.categories}
                        price={meal.price}
                        key={meal._id}
                        onAddItem={() => dispatch(cartActions.addItemToCart({restaurant_id: activeRestaurant.id, restaurant_name: activeRestaurant.name, meal}))}
                        />)}
                    </div>
                </div>
            }

            {filteredMeals.breakfast && 
                <div className={classes.meals__category}>
                    <h3 className={classes.meals__type}>Breakfast</h3>
                    <div className={classes.meals__list}>
                        {filteredMeals.breakfast.map(meal => <MealsItem
                        name={meal.name}
                        desc={meal.description}
                        ingredients={meal.ingredients}
                        categories={meal.categories}
                        price={meal.price}
                        key={meal._id}
                        onAddItem={() => dispatch(cartActions.addItemToCart({restaurant_id: activeRestaurant.id, restaurant_name: activeRestaurant.name, meal}))}
                        />)}
                    </div>
                </div>
            }

            {filteredMeals.lunch && 
                <div className={classes.meals__category}>
                    <h3 className={classes.meals__type}>Lunch</h3>
                    <div className={classes.meals__list}>
                        {filteredMeals.lunch.map(meal => <MealsItem
                        name={meal.name}
                        desc={meal.description}
                        ingredients={meal.ingredients}
                        categories={meal.categories}
                        price={meal.price}
                        key={meal._id}
                        onAddItem={() => dispatch(cartActions.addItemToCart({restaurant_id: activeRestaurant.id, restaurant_name: activeRestaurant.name, meal}))}
                        />)}
                    </div>
                </div>
            }
            {filteredMeals.dinner && 
                <div className={classes.meals__category}>
                    <h3 className={classes.meals__type}>Dinner</h3>
                    <div className={classes.meals__list}>
                        {filteredMeals.dinner.map(meal =><MealsItem
                        name={meal.name}
                        desc={meal.description}
                        ingredients={meal.ingredients}
                        categories={meal.categories}
                        price={meal.price}
                        key={meal._id}
                        onAddItem={() => dispatch(cartActions.addItemToCart({restaurant_id: activeRestaurant.id, restaurant_name: activeRestaurant.name, meal}))}
                        />)}
                    </div>
                </div>
            }
        </div>
    )
}

export default RestaurantDetails