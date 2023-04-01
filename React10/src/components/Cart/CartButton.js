import { useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const onCart = () => {
    props.onCartHandler();
  }
  return (
    <button onClick={onCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
