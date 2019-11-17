import { BookListItem } from "../book-list-item";
import s from "./book-list.module.css";
import React from "react";

export const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className={s.list}>
      {books.map(book => (
        <BookListItem
          onAddToCart={() => onAddToCart(book.id)}
          book={book}
          key={book.id}
        />
      ))}
    </ul>
  );
};
