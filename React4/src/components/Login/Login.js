import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'EMAIL_INPUT'){
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if(action.type === 'BLUR_INPUT'){
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: null };
};

const pwdReducer = (state, action) => {
  if(action.type === 'PASS_INPUT'){
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if(action.type === 'BLUR_INPUT'){
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: null };
};


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
  const [pwdState, dispatchPwd] = useReducer(pwdReducer, { value: '', isValid: false });

  const {isValid: emailIsValid} = pwdState;
  const {isValid: pwdIsValid} = emailState;

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && pwdIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, pwdIsValid]);

  const emailChangeHandler = (e) => {

    dispatchEmail({type:'EMAIL_INPUT', value: e.target.value});

    // setEnteredEmail(event.target.value);

    setFormIsValid(
      e.target.value.includes('@') && pwdState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    
    dispatchPwd({type: 'PASS_INPUT', value: e.target.value});

    // setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.value.includes('@') && e.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'BLUR_INPUT'});

  };

  const validatePasswordHandler = () => {
    dispatchPwd({type:'BLUR_INPUT'});
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, pwdState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwdState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwdState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
