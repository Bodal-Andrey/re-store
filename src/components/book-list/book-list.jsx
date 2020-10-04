import React from "react";
import BookListItem from "../book-list-item/book-list-item.jsx";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service.js";
import {booksLoaded} from "../../actions/index.js";
import {bindActionCreators} from "redux";
import compose from "../../utils/compose.js";
import "./book-list.css";

class BookList extends React.Component {
  componentDidMount() {
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;

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
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({booksLoaded}, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
