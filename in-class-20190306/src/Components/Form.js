import React, { Component } from 'react';
import Button from '../components/Button'
import Email from '../components/Email';
import Password from '../components/Password';


class Form extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <form className="text-center form-group bg-dark rounded p-4">
                        <Email onEmailChange={this.props.onEmailChange} />
                        <Password onPassChange={this.props.onPassChange} />
                    </form>
                    <Button onClick={this.props.onClick} />
                </div>
            </div >
        );
    }
}

export default Form;