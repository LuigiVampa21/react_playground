import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

const increment = () => {
  dispatch(counterActions.increment());
}

const decrement = () => {
  dispatch(counterActions.decrement());
}

const increase = () => {
  dispatch(counterActions.increase({amount: 10}))
}


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increase}>increase</button>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
