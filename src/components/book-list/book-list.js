import React, { Component } from "react";
import { BookListItem } from "../book-list-item";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { compose } from "recompose";
import s from "./book-list.module.css";

import { booksLoaded } from "../../actions";
class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }
  render() {
    const { books } = this.props;
    return (
      <ul className={s.list}>
        {books.map(book => (
          <BookListItem book={book} key={book.id} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
