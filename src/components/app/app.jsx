import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page.jsx";
import CartPage from "../pages/cart-page.jsx";
import "./app.css";

const App = () => {

  return (
    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact
      />
      <Route
        path="/cart"
        component={CartPage}
      />
    </Switch>
  );
};

export default App;
