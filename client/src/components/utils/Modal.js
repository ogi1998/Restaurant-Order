import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import classes from './Modal.module.css';
const Modal = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.modal__content}>
            <div className={classes.modal__header}>
                <h3 className={classes.modal__title}>{props.title}</h3>
                <span onClick={props.onHideModal} className={classes.modal__btn__close}><FontAwesomeIcon icon={faTimes} /></span>
            </div>
            <div className={classes.modal__main}>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Modal