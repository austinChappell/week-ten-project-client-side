import React, { Component } from 'react';

class BlogEntry extends Component {
  render() {
    return (
      <div className="BlogEntry">
        <h1>{this.props.data.title}</h1>
        <h2>{this.props.data.author}</h2>
        <h3>{this.props.data.createdAt}</h3>
        <p>{this.props.data.body}</p>
      </div>
    )
  }
}

export default BlogEntry;
