import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

class NavBar extends Component {

  handleClick = (string) => {
    console.log('button clicked', string);
    this.setState = {}
  }

  render() {
    let numOfItemsString;
    this.props.numOfItems > 0 ? numOfItemsString = `(${this.props.numOfItems})` : numOfItemsString = '';
    return (
      <div className="NavBar">
        <div className="container">
          <NavLink
            activeClassName="no-change" 
            className="brand-name"
            exact
            to="/">
              <img id="brand-logo" src="../images/company-logo.png" alt="logo" />
          </NavLink>
          <ul className="pull-right">
            <NavLink activeClassName="no-change" to="/about">About</NavLink>
            <NavLink activeClassName="no-change" to="/contact">Contact</NavLink>
            <NavLink activeClassName="no-change" to="/cart">Cart {numOfItemsString}</NavLink>
          </ul>
          <ul className="bottom-links">
            <NavLink activeClassName="active" to="/shop">Shop</NavLink>
            <NavLink activeClassName="active" to="/blog">Blog</NavLink>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numOfItems: state.cartItems.length
  }
}

export default connect(mapStateToProps)(NavBar);
