import classes from './Form.module.css';

import { useRef } from 'react';

import { loginUser, registerUser } from '../../store/userActions';

import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const loginRegisterError = useSelector(state => state.ui.loginRegisterError);

  const loginRegisterFormType = useSelector(
    state => state.ui.loginRegisterFormType
  );

  const registerRef = useRef({});

  const loginUsernameRef = useRef();
  const loginPasswordRef = useRef();

  const onLoginHandler = async (event) => {
    event.preventDefault();
    dispatch(
      loginUser({
        username: loginUsernameRef.current.value,
        password: loginPasswordRef.current.value,
      })
    );
  };

  const onRegisterHandler = async (event) => {
    event.preventDefault();
    const { firstName, lastName, username, password, email, passwordConfirm } =
      registerRef.current;

    dispatch(
      registerUser({
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        password: password.value,
        email: email.value,
        passwordConfirm: passwordConfirm.value,
      })
    );
  };

  return (
    <>
      {loginRegisterFormType === 'signin' && (
        <form className={classes.form} onSubmit={onLoginHandler}>
          {loginRegisterError && <div className={classes.form__error}>{loginRegisterError}</div>}
          <div className={classes.form__control}>
            <label className={classes.form__label}>Username</label>
            <input
              ref={loginUsernameRef}
              className={classes.form__input}
              type="text"
            />
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label}>Password</label>
            <input
              ref={loginPasswordRef}
              className={classes.form__input}
              type="password"
            />
          </div>
          <input
            className={classes.form__btn__submit}
            type="submit"
            value="Sign In"
          />
        </form>
      )}
      {loginRegisterFormType === 'signup' && (
        <form className={classes.form} onSubmit={onRegisterHandler}>
          {loginRegisterError && <div className={classes.form__error}>{loginRegisterError}</div>}
          <div className={classes.form__control}>
            <label className={classes.form__label}>First Name</label>
            <input
              className={classes.form__input}
              ref={(el) => (registerRef.current['firstName'] = el)}
              type="text"
            />
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label}>Last Name</label>
            <input
              className={classes.form__input}
              ref={(el) => (registerRef.current['lastName'] = el)}
              type="text"
            />
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label}>Username</label>
            <input
              className={classes.form__input}
              ref={(el) => (registerRef.current['username'] = el)}
              type="text"
            />
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label}>Email</label>
            <input
              className={classes.form__input}
              ref={(el) => (registerRef.current['email'] = el)}
              type="email"
            />
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label}>Password</label>
            <input
              className={classes.form__input}
              ref={(el) => (registerRef.current['password'] = el)}
              type="password"
            />
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label}>Repeat Password</label>
            <input
              className={classes.form__input}
              ref={(el) => (registerRef.current['passwordConfirm'] = el)}
              type="password"
            />
          </div>
          <input
            className={classes.form__btn__submit}
            type="submit"
            value="Sign Up"
          />
        </form>
      )}
    </>
  );
};
export default Form;
