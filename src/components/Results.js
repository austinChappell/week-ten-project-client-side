import React, { Component } from 'react';

import Result from './Result';

class Results extends Component {
  render() {
    // if (this.props.data.length > 0) {
    //   pageRender =
    // } else {
    //   pageRender = <h1>Content Loading...</h1>
    // }
    // console.log('PAGE RENDER', pageRender);
    return (
      <div className="Results">
        {this.props.data.map((result, index) => {
          return <Result key={index} data={result} />
        })}
      </div>
    )
  }
}

export default Results;
