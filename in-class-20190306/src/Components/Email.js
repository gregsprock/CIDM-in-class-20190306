import React, { Component } from 'react';

class Email extends Component {
    render() {
      return (
        <div className="form-input m-4">
          <input onChange={this.props.onEmailChange}
                 name="email"
                 type="email"
                 placeholder=" Email" />
        </div >
      );
    }
  }

  export default Email;