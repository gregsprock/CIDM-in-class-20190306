import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="form-input m-2">
                <button onClick={this.props.onClick}
                        className="btn btn-primary" >Submit</button>
            </div>
        );
    }
}

export default Button;