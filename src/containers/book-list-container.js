import React, { Component } from "react";
import { withBookstoreService } from "../components/hoc";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Spinner } from "../components/spinner";
import { ErrorIndicator } from "../components/error-indicator";
import { fetchBooks, bookAddToCart } from "../actions";
import BookList from "../components/book-list";

class BookListContainer extends Component {
  async componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }

    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
});
const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddToCart: id => dispatch(bookAddToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
