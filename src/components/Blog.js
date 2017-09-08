import React, { Component } from 'react';

import BlogEntry from './BlogEntry';

class Blog extends Component {

  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://drum-shop-blog.herokuapp.com/api').then((response) => {
      return response.json();
    }).then((results) => {
      console.log(results);
      this.setState({
        data: results
      })
    })
  };

  render() {

    let blogResults;

    this.state.data.length > 0 ? blogResults = this.state.data.map((entry, index) => <BlogEntry key={index} data={entry} /> ) : blogResults = <h1>Blog Loading...</h1>;

    return (
      <div className="Blog">
        {blogResults}
      </div>
    )
  }
}

export default Blog;
