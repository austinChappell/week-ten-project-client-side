import React, { Component } from 'react';

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="Home">
        <div className="overlay"></div>
      </div>
    )
  }
}

export default Home;
