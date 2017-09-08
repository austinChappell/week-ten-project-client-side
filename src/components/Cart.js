import React from 'react';
import CartItems from './CartItems';

function Cart(props) {
  // console.log('CART PROPS', props.route.store);
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="Cart">
        <CartItems />
      </div>
    </div>
  )
}

export default Cart;
