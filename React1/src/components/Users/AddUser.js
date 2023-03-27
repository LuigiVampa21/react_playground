import React, { useState } from 'react'
import { Card } from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css'

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState(null);

    const addUserHandler = e => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please Enter valid name/age"
            })
        };
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please Enter valid a positive age number"
            })
        };
        const newUser = {
            name: enteredUsername,
            age: enteredAge,
            date: Date.now()
        }
        props.onAddUser(newUser);
        resetInput();
    }

    const usernameChangeHandler = e => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = e => {
        setEnteredAge(e.target.value);
    }

    const onValidate = () => {
        setError(null);
    }

    const resetInput = () => {
        setEnteredAge("");
        setEnteredUsername("");
    }

    return (
        <div>
            {error != null &&
                <ErrorModal onValidate={onValidate} title={error.title} message={error.message} />
            }
            {error === null &&
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit"> Add user </Button>
                </form>
            </Card>
            }
        </div>
    )
}

export default AddUser