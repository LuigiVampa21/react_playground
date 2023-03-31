import useInput from "../hooks/use-input";
import validateEmail from '../utils/validateEmail';
import isNotEmpty from '../utils/isEmpty';

const BasicForm = (props) => {

  let formIsValid = false;

  const {
    value: firstNameValue,
    isValid: firstNameisValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameisValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailisValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(validateEmail);

if(firstNameisValid && lastNameisValid && emailisValid){
  formIsValid = true;
}

const onSubmitHandler = e => {
  e.preventDefault();
  if(!formIsValid) return;
  console.log(firstNameValue, lastNameValue, emailValue);
  resetFirstName();
  resetLastName();
  resetEmail();
}

const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameHasError && <p className="error-text">first name has an error</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameHasError && <p className="error-text">last name has an error</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className="error-text">email has an error</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
