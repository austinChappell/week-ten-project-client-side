import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  constructor() {
    super();

    this.state = {}
  }

  handleClick = (string) => {
    console.log('button clicked', string);
    this.setState = {}
  }

  render() {
    return (
      <div className="NavBar">
        <div className="container">
          <NavLink activeClassName="no-change" className="brand-name" exact to="/">The Drum Shop</NavLink>
          <ul className="pull-right">
            <NavLink activeClassName="no-change" to="/about">About</NavLink>
            <NavLink activeClassName="no-change" to="/contact">Contact</NavLink>
            <NavLink activeClassName="no-change" to="/cart">Cart</NavLink>
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

export default NavBar;
