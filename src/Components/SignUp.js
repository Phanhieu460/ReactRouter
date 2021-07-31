import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
      birthday: "",
      isBlocking: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      isBlocking: event.target.value.length > 0,
    });
  };
  hanldeSubmit = (e) => {
    alert("Fullname: " + this.state.fullname);
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
          <h2>REGISTER SYSTEM</h2>
          <div className="form-group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={this.state.fullname}
              placeholder="Enter Fullname"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter Email"
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
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              name="confirm_password"
              value={this.state.confirm_password}
              onChange={this.handleChange}
              placeholder="Enter Confirm Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              value={this.state.birthday}
              onChange={this.handleChange}
              placeholder="Enter Birthday"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.hanldeSubmit}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
