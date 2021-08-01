import React, { Component } from "react";
import { Prompt, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isBlocking: false,
      isRedirect: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      isBlocking: event.target.value.length > 0,
    });
  };
  handleSubmit = (e) => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (
      user.email === this.state.email &&
      user.password === this.state.password
    ) {
      var user_login = {
        email: this.state.email,
        password: this.state.password,
      };
      var user_json = JSON.stringify(user_login);
      localStorage.setItem("user_login", user_json);
      this.setState({
        isRedirect: true,
      });
    }
    e.preventDefault();
  };
  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/accountManagement" />;
    }
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      const location = this.props.location;
      return (
        <Redirect
          to={{
            pathname: "/accountManagement",
            state: {
              from: location,
            },
          }}
        />
      );
    }
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
