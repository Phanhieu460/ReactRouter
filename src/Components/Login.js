import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isBlocking: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      isBlocking: event.target.value.length > 0,
    });
  };
  handleSubmit = (e) => {
    alert("Email:" + this.state.email);
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <Prompt
          when={this.state.isBlocking}
          message={(location) => "Bạn có thực sự muốn thoát không?"}
        />
        <form>
          <h2>LOGIN</h2>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
