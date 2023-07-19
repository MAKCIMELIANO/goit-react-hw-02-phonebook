import React, { Component } from 'react';

export default class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      rememberMe: !prevState.rememberMe,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, rememberMe } = this.state;

    if (!rememberMe) {
      return; // Если чекбокс не выбран, прекратить выполнение метода handleSubmit
    }

    this.props.createUser({
      email: email,
      password: password,
      rememberMe: rememberMe,
    });

    this.props.closeModal();
  };

  render() {
    const { rememberMe, email, password } = this.state;

    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={this.handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
