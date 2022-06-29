import classes from './Form.module.css';

import {useRef} from 'react';

const Form = (props) => {

    const loginUsernameRef = useRef();
    const loginPasswordRef = useRef();

    const onLoginHandler = async event => {
        event.preventDefault();

        const res = await fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({username: loginUsernameRef.current.value, password: loginPasswordRef.current.value})
        })

        const data = await res.json();

        console.log(data);

    };

  return (
    <>
    {props.isLogin && 
    <form className={classes.form} onSubmit={onLoginHandler}>
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