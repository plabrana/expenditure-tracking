import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./Navigation-bar.css"
import PurchaseForm from "./New-purchase-form";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <h2>Home</h2>
  },
  {
    path: "/purchases",
    sidebar: () => <h2>Register New Purchase</h2>,
    main: () => <PurchaseForm />
  },
  {
    path: "/summary",
    sidebar: () => <h2>Monthly Summary</h2>
  }
];

const NavBar = () => (
  <Router>
    <div className="navigation-bar">
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
      <div>
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