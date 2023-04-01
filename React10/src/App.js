import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData, getCart } from './store/cart-actions';

let isInitial = true;

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch])
  return (
    <React.Fragment>
      {notification && <Notification notification={notification} />}
      <Layout>
        {cartIsVisible && <Cart cart={cart} />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
