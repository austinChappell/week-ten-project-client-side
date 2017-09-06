import React, { Component } from 'react';

import Results from './Results';

class Shop extends Component {

  constructor() {
    super();

    this.state = {
      data: [],
      url: `https://drum-shop-api.herokuapp.com/api/`
    }
  }

  componentDidMount() {
    this.fetchData('');
  }

  fetchData = (category) => {
    console.log('ABOUT TO FETCH DATA WITH THE URL OF ', category);
    fetch(this.state.url + category).then((response) => {
      return response.json();
    }).then((results) => {
      this.setState({
        data: results
      })
    })
  }

  filterChange = (e) => {
    const category = e.target.value;
    this.fetchData(category);
  }

  render() {

    let results;

    if (this.state.data.length > 0) {
      results = <Results data={this.state.data} />
    } else {
      results = <h1>Loading Inventory...</h1>
    }

    console.log('SHOP STATE', this.state);
    return (
      <div className="Shop container">
        <section className="filter-section">
          <h4>Filter:</h4>
          <select onChange={(e) => this.filterChange(e)}>
            <option value="">All</option>
            <option value="Drums">Drums</option>
            <option value="Cymbals">Cymbals</option>
            <option value="Hardware">Hardware</option>
          </select>
        </section>
        {results}
      </div>
    )
  }
}

export default Shop;
