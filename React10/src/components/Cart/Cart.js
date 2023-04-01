import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);
  const onAddItem = item => {
    dispatch(cartActions.addItem({item}));
  }
  const onRemoveItem = id => {
    console.log(id);
    dispatch(cartActions.removeItem(id));
  }
  return (
    <Card className={classes.cart} >
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{ id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price }}
            onAdd={onAddItem}
            onRemove={onRemoveItem}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
