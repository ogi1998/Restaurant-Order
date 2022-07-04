import classes from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faAt, faAddressBook, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from "../../store/uiSlice";
import { userActions } from '../../store/userSlice';
import { cartActions } from '../../store/cartSlice';

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const showSignIn = () => dispatch(uiActions.showSignIn());
  const showSignUp = () => dispatch(uiActions.showSignUp());
  const signOut = () => dispatch(userActions.logoutUser());
  const showCart = () => dispatch(uiActions.showCart());
  return (
    <nav className={classes.nav}>
        <h1 className={classes.nav__logo}>Cloggy's</h1>
        <div className={classes.nav__navigation}>
            <a href='/' className={classes.nav__item}><FontAwesomeIcon icon={faHouse} /> Home</a>
            <a href='/' className={classes.nav__item}><FontAwesomeIcon icon={faAt} /> Menu</a>
            <a href='/' className={classes.nav__item}><FontAwesomeIcon icon={faAddressBook} /> Contacts</a>
            {!isLoggedIn && 
            <>
            <button onClick={showSignIn}  className={`${classes.nav__item} ${classes.nav__item__dark}`}>Sign in</button>
            <button onClick={showSignUp}  className={`${classes.nav__item} ${classes.nav__item__light}`}>Sign up</button>
            </>
          }   
          {isLoggedIn &&
          <> 
          <button  onClick={showCart} className={`${classes.nav__item} ${classes.nav__item__dark}`}>Cart <FontAwesomeIcon icon={faCartShopping} />: 0</button>
          <button onClick={signOut}  className={`${classes.nav__item} ${classes.nav__item__dark}`}>Sign Out</button>
          </>
          }
        </div>
    </nav>
  )
}

export default Navbar