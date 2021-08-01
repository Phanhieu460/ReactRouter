import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class DepartmentManagement extends Component {
  render() {
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Dang nhap de xem noi dung");
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <p>Department</p>
      </div>
    );
  }
}

export default DepartmentManagement;
