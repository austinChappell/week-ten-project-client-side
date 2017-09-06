import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import BaseLayout from './BaseLayout';
import Blog from './Blog';
import Cart from './Cart';
import Home from './Home';
import NavBar from './NavBar';
import Shop from './Shop';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <BaseLayout>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/shop" component={Shop} />
              <Route path="/blog" component={Blog} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </BaseLayout>
        </Router>
      </div>
    );
  }
}

export default App;
