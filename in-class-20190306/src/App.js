import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import 'bootstrap'

class App extends Component {
  state = {
    email: '',
    password: '',
    formresults: ''
  }

  emailHandler = (e) => {
    const value = e.target.value;
    return this.setState({ email: value });
  }

  passHandler = (e) => {
    const value = e.target.value;
    return this.setState({ pass: value });
  }
  
  handleClick = (e) => {
    e.preventDefault();
    const formresults = "Email: " + this.state.email;
    this.setState({ formresults: formresults });
  }

  render() {
    return (
      <div className="App">
        <div className="form-group rounded m-4">
          <h1><Form onEmailChange={this.emailHandler}
                    onPassChange={this.passHandler}
                    onClick={this.handleClick} /></h1>
        </div>
        <p className="container" id="results">{this.state.formresults}</p>
      </div>
    );
  }
}

export default App;import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
