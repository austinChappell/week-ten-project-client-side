import React from 'react';
import { connect } from 'react-redux';

import Result from './Result';

function ResultsRedux (props) {

  return (
    <div className="Results">
      {props.data.map((result, index) => {
        return <Result key={index} data={result} />
      })}
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(ResultsRedux);
