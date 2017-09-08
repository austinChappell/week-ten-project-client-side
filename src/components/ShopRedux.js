import React from 'react';
import { connect } from 'react-redux';

import Results from './Results';

function ShopRedux (props) {


  // const = filterChange = (e) => {
  //   const category = e.target.value;
  //   this.fetchData(category);
  // }

  // const fetchData = (category) => {
  //   console.log('ABOUT TO FETCH DATA WITH THE URL OF ', category);
  //   fetch(url + category).then((response) => {
  //     return response.json();
  //   }).then((results) => {
  //     console.log(results);
  //   });
  // }


  let results;

  if (props.data.length > 0) {
    results = <Results data={props.data} />
  } else {
    results = <h1>Loading Inventory...</h1>
  }

  // console.log('SHOP STATE', this.state);
  return (
    <div className="Shop container">
      <section className="filter-section">
        <h4>Filter:</h4>
        <select onChange={(e) => props.filterChange(e)}>
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

const mapStateToProps = (state) => {
  return {
    data: state.data,
    url: state.url,
    category: state.category,
    fetchData: state.fetchData,
    filterChange: state.filterChange
  }
}

export default connect(mapStateToProps)(ShopRedux);
