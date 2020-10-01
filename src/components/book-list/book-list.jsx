import React from "react";
import BookListItem from "../book-list-item/book-list-item.jsx";
import "./book-list.css";

class BookList extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <ul>
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

export default BookList;
