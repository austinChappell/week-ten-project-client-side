import React from 'react';
import { connect } from 'react-redux';

function CartItems(props) {
  // console.log('CART PROPS', props.route.store);
  return (
    <div className="CartItems">
      {props.cartItems.map((item, index) => {
        return <h1 key={index}>{item}</h1>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  }
}

export default connect(mapStateToProps)(CartItems);
