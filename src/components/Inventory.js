import React from 'react';
import { connect } from 'react-redux';
import store from '../store/';

import ResultsRedux from './ResultsRedux';

// const fetchData = function(category) {
//   const url = 'https://drum-shop-api.herokuapp.com/api/';
//   // console.log('THIS IS ', );
//   console.log('ABOUT TO FETCH DATA WITH THE URL OF ', category);
//   fetch(url + category).then((response) => {
//     return response.json();
//   }).then((results) => {
//     // console.log('RESULTS', results);
//     // console.log('DATA IS ', this.data);
//     return results;
//   })
// }

function Inventory (props) {

  // props.fetchData();
  // props.getData();

  if (props.data.length === 0) {
    props.getData('');
  }

  let results;

  if (props.data.length > 0) {
    results = <ResultsRedux store={store} />
  } else {
    results = <h1>Loading Inventory...</h1>
  }

  console.log('SHOP STATE', props);
  return (
    <div className="Shop container">
      <section className="filter-section">
        <h4>Filter:</h4>
        <select onChange={(e) => props.getData(e.target.value)}>
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
    fetchData: state.fetchData,
    filterChange: state.filterChange,
    category: state.category,
    url: state.url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (category) => {
      console.log('getting data');
      const fetchData = (category) => {
        const url = 'https://drum-shop-api.herokuapp.com/api/';
        // console.log('THIS IS ', );
        console.log('ABOUT TO FETCH DATA WITH THE URL OF ', category);
        fetch(url + category).then((response) => {
          return response.json();
        }).then((results) => {
          // console.log('RESULTS', results);
          // console.log('DATA IS ', this.data);
          const action = {type: 'FETCH_DATA', data: results};
          dispatch(action);
        })
      }
      fetchData(category);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
