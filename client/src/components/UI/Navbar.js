import classes from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faAt, faAddressBook} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <h1 className={classes.nav__logo}>Cloggy's</h1>
        <div className={classes.nav__navigation}>
            <a href='/' className={classes.nav__item}><FontAwesomeIcon icon={faHouse} /> Home</a>
            <a href='/' className={classes.nav__item}><FontAwesomeIcon icon={faAt} /> Menu</a>
            <a href='/' className={classes.nav__item}><FontAwesomeIcon icon={faAddressBook} /> Contacts</a>
            <a href='/' className={`${classes.nav__item} ${classes.nav__item__dark}`}>Sign in</a>
            <a href='/' className={`${classes.nav__item} ${classes.nav__item__light}`}>Sign up</a>
        </div>
    </nav>
  )
}

export default Navbar