import React from "react";
import "./app.css";
import {withBookstoreService} from "../hoc/with-bookstore-service.js";

const App = ({bookstoreService}) => {

  return (
    <div>App</div>
  );
};

export default withBookstoreService()(App);
