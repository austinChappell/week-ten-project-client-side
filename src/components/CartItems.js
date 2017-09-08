import React from 'react';
import { connect } from 'react-redux';

function CartItems(props) {
  // console.log('CART PROPS', props.route.store);

  let cartItems;

  if (props.cartItems.length === 0) {
    cartItems = <h2>Your Cart Is Empty</h2>
  } else {
    cartItems = props.cartItems.map((result, index) => {
      return (
        <div key={result._id}>
          <h1>{result.brand} {result.model} {result.name}</h1>
          <h2>${result.price}</h2>
          <figure>
            <img src={result.imageUrl} alt={result.name} />
            <figcaption>{result.description}</figcaption>
          </figure>
        </div>
      )
    })
  }

  return (

    <div className={props.cartItems.length > 0 ? "CartItems" : "EmptyCart"}>
      {cartItems}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  }
}

export default connect(mapStateToProps)(CartItems);
