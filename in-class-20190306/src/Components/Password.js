import React, { Component } from 'react';

class Password extends Component {
    render() {
        return (
            <div className="form-input m-4">
                <input onChange={this.props.onPassChange}
                    name="password"
                    type="password"
                    placeholder=" Password" />
            </div>
        );
    }
}

export default Password;