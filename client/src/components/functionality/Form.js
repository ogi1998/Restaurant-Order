import classes from './Form.module.css';

const Form = (props) => {

  return (
    <>
    {props.isLogin && 
    <form className={classes.form}>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Username</label>
            <input className={classes.form__input} />
        </div>
        <div className={classes.form__control}>
            <label className={classes.form__label}>Password</label>
            <input className={classes.form__input} />
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