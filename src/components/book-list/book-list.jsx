import React from "react";
import BookListItem from "../book-list-item/book-list-item.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorIndicator from "../error-indicator/error-indicator.jsx";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc/with-bookstore-service.js";
import {booksLoaded, booksRequested, booksError} from "../../actions/index.js";
import {bindActionCreators} from "redux";
import compose from "../../utils/compose.js";
import "./book-list.css";

class BookList extends React.Component {
  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
    booksRequested();
    bookstoreService.getBooks()
    .then((data) => booksLoaded(data))
    .catch((error) => booksError(error));
  }

  render() {
    const {books, loading, error} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded,
    booksRequested,
    booksError,
  }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
