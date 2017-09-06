import React from 'react';
import CartItems from './CartItems';

import store from '../store/';

function Cart(props) {
  // console.log('CART PROPS', props.route.store);
  return (
    <div className="Cart">
      <CartItems store={store} />
    </div>
  )
}

export default Cart;
