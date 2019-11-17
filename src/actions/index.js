import { createAction } from "redux-actions";

export const booksRequested = createAction("FETCH_BOOKS_REQUEST");
export const booksLoaded = createAction("FETCH_BOOKS_SUCCESS");
export const booksError = createAction("FETCH_BOOKS_FAILURE");
export const bookAddToCart = createAction("BOOKS_ADD_TO_CART");

export const fetchBooks = (dispatch, bookstoreService) => async () => {
  try {
    dispatch(booksRequested());
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  } catch (error) {
    dispatch(booksError(error));
  }
};
