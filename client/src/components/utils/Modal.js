import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

import classes from './Modal.module.css';
const Modal = (props) => {
  const dispatch = useDispatch();

  const loginRegisterFormType = useSelector(state => state.ui.loginRegisterFormType);
  const showCart = useSelector(state => state.ui.showCart);

  const hideModal = () => {
      dispatch(uiActions.hideForm()); 
  }
  return (
    <div className={classes.modal}>
        <div className={classes.modal__content}>
            <div className={classes.modal__header}>
                <h3 className={classes.modal__title}>{showCart && 'Meals in Cart'} {loginRegisterFormType === 'signin' && 'Sign In'} {loginRegisterFormType === 'signup' && 'Sign Up'}</h3>
                <span onClick={hideModal} className={classes.modal__btn__close}><FontAwesomeIcon icon={faTimes} /></span>
            </div>
            <div className={classes.modal__main}>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Modal