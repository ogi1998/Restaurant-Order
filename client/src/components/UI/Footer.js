import classes from './Footer.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faFacebookF, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__navigation}>
        <div className={classes.footer__navigation__item}>
          <h1 className={classes.footer__title}>Top cuisines</h1>
          <ul className={classes.footer__menu}>
            <li className={classes.footer__menu__item}>Thai</li>
            <li className={classes.footer__menu__item}>Italian</li>
            <li className={classes.footer__menu__item}>Chinese</li>
            <li className={classes.footer__menu__item}>Japanese</li>
          </ul>
        </div>
        <div className={classes.footer__item}>
          <h1 className={classes.footer__title}>Locations</h1>
          <ul className={classes.footer__menu}>
            <li className={classes.footer__menu__item}>London</li>
            <li className={classes.footer__menu__item}>Manchester</li>
            <li className={classes.footer__menu__item}>Liverpool</li>
            <li className={classes.footer__menu__item}>Bristol</li>
            <li className={classes.footer__menu__item}>Cambridge</li>
            <li className={classes.footer__menu__item}>Cardiff</li>
          </ul>
        </div>
        <div className={classes.footer__item}>
          <h1 className={classes.footer__title}>Work with Us</h1>
          <ul className={classes.footer__menu}>
            <li className={classes.footer__menu__item}>Work with us</li>
            <li className={classes.footer__menu__item}>Send us your CV</li>
          </ul>
        </div>
      </div>
      <div className={classes.footer__contact}>
        <address className={classes.footer__contact__copyright}>Copyright &copy; Ognjen Vujasinovic. All rights reserved.</address>
        <div className={classes.footer__contact__socials}>
          <span className={classes.footer__contact__item}>Find us</span>
          <span className={classes.footer__contact__item}><FontAwesomeIcon icon={faFacebookF} /></span>
          <span className={classes.footer__contact__item}><FontAwesomeIcon icon={faInstagram} /></span>
          <span className={classes.footer__contact__item}><FontAwesomeIcon icon={faLinkedin} /></span>
        </div>
      </div>
    </footer>
  )
}
export default Footer