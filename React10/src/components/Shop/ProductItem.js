import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

    const onAddToCart = () => {
      // console.log(props.product);
      dispatch(cartActions.addItem({ item: props.product }));
    }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.product.title}</h3>
          <div className={classes.price}>${props.product.price.toFixed(2)}</div>
        </header>
        <p>{props.product.description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
