import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact Us</h1>
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <textarea placeholder="Your Message..."></textarea>
        <button>Send</button>
      </div>
    )
  }
}

export default Contact;
