import classes from './Form.module.css';

import {useRef} from 'react';

import {loginUser} from '../../store/userActions';

import {useDispatch, useSelector} from 'react-redux';

const Form = (props) => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const error = useSelector(state => state.user.error);


    const loginUsernameRef = useRef();
    const loginPasswordRef = useRef();

    const onLoginHandler = async event => {
        event.preventDefault();

        dispatch(loginUser({
        username: loginUsernameRef.current.value,
        password: loginPasswordRef.current.value}));
    };
    if(error) {
        console.log(error);
    }

  return (
    <>
    {props.isLogin && 
    <form className={classes.form} onSubmit={onLoginHandler}>
        {props.error && <div className={classes.form__error}>{props.error}</div>}
        <div className={classes.form__control}>
            <label className={classes.form__label}>Username</label>
            <input ref={loginUsernameRef} className={classes.form__input} type='text'/>
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Password</label>
            <input ref={loginPasswordRef} className={classes.form__input} type='password' />
        </div>
        <input className={classes.form__btn__submit} type='submit' value='Sign In' />
    </form>
    }
    {!props.isLogin &&
    <form className={classes.form}>
        {props.error && <div className={classes.form__error}>{props.error}</div>}
        <div className={classes.form__control}>
            <label className={classes.form__label}>First Name</label>
            <input className={classes.form__input} type='text' />
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Last Name</label>
            <input className={classes.form__input} type='text' />
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Username</label>
            <input className={classes.form__input} type='text' />
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Email</label>
            <input className={classes.form__input} type='email'/>
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Password</label>
            <input className={classes.form__input} type='password' />
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Repeat Password</label>
            <input className={classes.form__input} type='password' />
        </div>
        <input className={classes.form__btn__submit} type='submit' value='Sign Up' />
    </form>}
    </>
  )
}
export default Form