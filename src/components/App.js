import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/';

import About from './About';
import BaseLayout from './BaseLayout';
import Blog from './Blog';
import Cart from './Cart';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import Shop from './Shop';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <BaseLayout>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/shop" component={Shop} />
                <Route path="/blog" component={Blog} />
                <Route path="/cart" component={Cart} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
              </Switch>
            </BaseLayout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
