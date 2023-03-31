// With State

// import { useState } from "react"


// const useInput = validateFn => {

//     const [enteredValue, setEnteredValue] = useState("");
//     const [isTouched, setIsTouched] = useState(false);

//     const valueIsValid = validateFn(enteredValue);
//     const hasError = !valueIsValid && isTouched;

//     const valueChangeHandler = e => {
//         setEnteredValue(e.target.value);
//     }

//     const valueBlurHandler = e => {
//         setIsTouched(true);
//     }

//     const reset = () => {
//         setEnteredValue("");
//         setIsTouched(false);
//     }

//     return {
//         value: enteredValue,
//         valueIsValid,
//         hasError,
//         valueChangeHandler,
//         valueBlurHandler,
//         reset
//     };

// }

// export default useInput;

// With Reducer

import { useReducer
    // ,useEffect
 } from "react"

const initialInputState = {
    value: "",
    isTouched: false
}

const inputStateReducer = (state, action) => {

    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    };
    
    if (action.type === 'BLUR') {
        return {
            isTouched: true,
            value: state.value
        }
    };

    if (action.type === 'RESET') {
        return {
            value: "",
            isTouched: false
        }
    };

    return inputStateReducer;
};


const useInput = validateFn => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    // const {value} = inputState;

    // useEffect(() => {
    //     console.log(value);
    // }, [value])

    console.log(inputState);
    const valueIsValid = validateFn(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = e => {
        dispatch({ type: 'INPUT', value: e.target.value })
    }

    const valueBlurHandler = () => {
        dispatch({ type: 'BLUR' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return {
        value: inputState.value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };

}

export default useInput;