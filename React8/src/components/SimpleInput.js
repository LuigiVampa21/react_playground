import { 
  // useEffect, 
  useState } from "react";

import useInput from "../hooks/use-input";


const SimpleInput = (props) => {

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== "");

  let formIsValid = false;

  if(enteredNameIsValid){
    formIsValid = true;
  }
  
  const formSubmissionHandler = e => {
    e.preventDefault();

    // setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    } 

    resetName();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' value={enteredName} 
        id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {nameInputHasError && <p>Name should not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
