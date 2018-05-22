import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Navigation-bar.css"

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/purchases",
    main: () => <h2>Register New Purchase</h2>
  },
  {
    path: "/summary",
    main: () => <h2>Monthly Summary</h2>
  }
];

const NavBar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/purchases">New Purchase</Link>
          </li>
          <li>
            <Link to="/summary">Summary</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default NavBar;