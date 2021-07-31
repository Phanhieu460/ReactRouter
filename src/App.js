import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AccountManagement from "./Components/AccountManagement";
import DepartmentManagement from "./Components/DepartmentManagement";
import Error_1 from "./Components/Error_1";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                activeStyle={{ backgroundColor: "red" }}
                exact
                to="/"
              >
                VTI ACEDAMY
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                to="/home"
                activeStyle={{ backgroundColor: "red" }}
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeStyle={{ backgroundColor: "red" }}
                exact
              >
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link "
                to="/accountManagement"
                activeStyle={{ backgroundColor: "red" }}
                exact
              >
                Account Management
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link "
                to="/departmentManagement"
                activeStyle={{ backgroundColor: "red" }}
                exact
              >
                Department Management
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink
                className="nav-link "
                to="/signUp"
                activeStyle={{ backgroundColor: "red" }}
                exact
              >
                <i className="fa fa-user" aria-hidden="true">
                  Sign Up
                </i>
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink
                className="nav-link "
                to="/login"
                activeStyle={{ backgroundColor: "red" }}
                exact
              >
                <i className="fa fa-sign-in" aria-hidden="true">
                  Login
                </i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/home" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/signUp" component={SignUp} exact></Route>
        <Route
          path="/accountManagement"
          component={AccountManagement}
          exact
        ></Route>
        <Route
          path="/departmentManagement"
          component={DepartmentManagement}
          exact
        ></Route>
        <Route component={Error_1}></Route>
      </Switch>
    </div>
  );
}

export default App;
