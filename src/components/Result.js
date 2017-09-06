import React from 'react';

function Result (props) {

  const result = props.data;
  return (
    <div className="Result">
      <h1>{result.brand} {result.model} {result.name}</h1>
      <h2>${result.price}</h2>
      <figure>
        <img src={result.imageUrl} alt={result.name} />
        <figcaption>{result.description}</figcaption>
      </figure>
      <button>Add To Cart</button>
    </div>
  )

}

export default Result;
