import classes from './Header.module.css';

import imgNuggets from '../../img/landing/1.png';
import imgPizza from '../../img/landing/2.png';
import imgWhiskey from '../../img/landing/3.png';
import imgWine from '../../img/landing/4.png';
import imgEggs from '../../img/landing/5.png';

import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={classes.header}>
        <Navbar />
        <section className={classes.header__main}>
            <article className={classes.header__main__left}>
                <div className={classes.header__text__container}>
                <h1 className={classes.header__title}>Your Favorite Food, <br /> Delivered Fast</h1>
                <h2 className={classes.header__subtitle}>Find the best restaurants in your city and get <br />it delivered to your place!</h2>
                </div>
                <button className={classes.header__btn}>Order Now!</button>
            </article>
            <article className={classes.header__main__right}>
                <img className={classes.header__img__nuggets} src={imgNuggets} alt="Chicken Nuggets" />
                <img className={classes.header__img__pizza} src={imgPizza} alt="Pizza" />
                <img className={classes.header__img__eggs} src={imgEggs} alt="Eggs" />
                <img className={classes.header__img__whiskey} src={imgWhiskey} alt="Whiskey" />
                <img className={classes.header__img__wine} src={imgWine} alt="Wine" />
            </article>
        </section>
    </header>
  )
}

export default Header