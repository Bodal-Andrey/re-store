import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app/app.jsx";
import ErrorBoundry from "./components/error-boundry/error-boundry.jsx";
import BookstoreService from "./services/bookstore-service.jsx";
import {BookstoreServiceProvider} from "./components/bookstore-service-context/bookstore-service-contex.jsx";
import store from "./store.js";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>,
    document.getElementById(`root`)
);
