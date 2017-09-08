import { createStore } from 'redux';

const initialState = {
  cartItems: [],
  data: [],
  category: '',
  filterChange: (e) => {
    const category = e.target.value;
    this.fetchData(category);
  },
  addToCart: () => {
    console.log('button clicked');
  }
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch(action.type) {
    case 'FETCH_DATA':
      return Object.assign({}, state, {data: action.data});
    case 'ADD_ITEM_TO_CART':
      return Object.assign({}, state, {cartItems: state.cartItems.concat(action.item)});
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
