import React from 'react';
import { connect } from 'react-redux';

function Result (props) {

  const result = props.data;

  let isInCart = false;

  console.log('INVENTORY', props.cartItems);

  props.cartItems.find((item) => {
    isInCart = item._id === result._id;
  })

  console.log('Is in cart', isInCart);

  let buttonText;
  isInCart ? buttonText = 'Item Added' : buttonText = 'Add To Cart';

  return (
    <div className="Result">
      <h1>{result.brand} {result.model} {result.name}</h1>
      <h2>${result.price}</h2>
      <figure>
        <img src={result.imageUrl} alt={result.name} />
        <figcaption>{result.description}</figcaption>
      </figure>
      <button onClick={() => props.addToCart(result)}>{buttonText}</button>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    inventory: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      console.log('button clicked', item);
      const action = { type: 'ADD_ITEM_TO_CART', item };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
