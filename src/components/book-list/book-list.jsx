import React from "react";
import BookListItem from "../book-list-item/book-list-item.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorIndicator from "../error-indicator/error-indicator.jsx";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc/with-bookstore-service.js";
import {fetchBooks, bookAddedToCart} from "../../actions/index.js";
import compose from "../../utils/compose.js";
import "./book-list.css";

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
               book={book}
               onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCart} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = (state) => {
  return {
    bookList: {
      books: state.books,
      loading: state.loading,
      error: state.error,
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
