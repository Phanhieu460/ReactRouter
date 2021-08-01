import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";

class AccountManagement extends Component {
  listAccounts = [
    {
      ID: 1,
      Email: "email1@gmail.com",
    },
    {
      ID: 2,
      Email: "email2@gmail.com",
    },
    {
      ID: 3,
      Email: "email3@gmail.com",
    },
    {
      ID: 4,
      Email: "email4@gmail.com",
    },
  ];
  render() {
    // const location = this.props.location;
    // console.log("Thong tin location", location);
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Dang nhap de xem noi dung");
      return <Redirect to="/login" />;
    }
    const match = this.props.match;
    // console.log("thong tin match", match);
    const row_Account = this.listAccounts.map((item, index) => {
      let url = match.url.concat("/").concat(item.ID);
      return (
        <tr key={index}>
          <td>{item.ID}</td>
          <td>
            <NavLink to={url} exact>
              {item.Email}
            </NavLink>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{row_Account}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AccountManagement;
