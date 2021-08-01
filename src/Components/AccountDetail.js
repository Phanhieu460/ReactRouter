import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AccountDetail extends Component {
  listAccounts = [
    {
      ID: "1",
      Email: "Email1@gmail.com",
      Username: "Username1",
      Fullname: "Fullname1",
      Department: "Sale",
      Position: "Scrum Master",
    },
    {
      ID: "2",
      Email: "Email2@gmail.com",
      Username: "Username2",
      Fullname: "Fullname2",
      Department: "Sale",
      Position: "Scrum Master",
    },
    {
      ID: "3",
      Email: "Email3@gmail.com",
      Username: "Username3",
      Fullname: "Fullname3",
      Department: "Accounting",
      Position: "Scrum Master",
    },
    {
      ID: "4",
      Email: "Email4@gmail.com",
      Username: "Username4",
      Fullname: "Fullname4",
      Department: "Accounting",
      Position: "Scrum Master",
    },
  ];
  render() {
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Dang nhap de xem noi dung");
      return <Redirect to="/login" />;
    }
    const match = this.props.match;
    // console.log("Thong tin match", match);
    const idParam = match.params.ID;
    const row_Account = this.listAccounts.map((item, index) => {
      if (item.ID === idParam) {
        return (
          <tr key={index}>
            <td>{item.ID}</td>
            <td>{item.Email}</td>
            <td>{item.Fullname}</td>
            <td>{item.Department}</td>
            <td>{item.Position}</td>
          </tr>
        );
      }
    });
    return (
      <div>
        <div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Fullname</th>
                  <th>Department</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>{row_Account}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountDetail;
