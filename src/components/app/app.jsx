import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page.jsx";
import CartPage from "../pages/cart-page.jsx";
import ShopHeader from "../shop-header/shop-header.jsx";
import "./app.css";

const App = () => {

  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
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
    </main>
  );
};

export default App;
