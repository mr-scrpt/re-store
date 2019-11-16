import React from "react";
import s from "./block-list-item.module.css";
import cx from "classnames/bind";

//const cx = classNames.bind(s);
export const BookListItem = ({ book }) => {
  const { title, author, price, coverImg } = book;
  return (
    <li className={s.item}>
      <div className={s.cover}>
        <img src={coverImg} alt={title} title={title} className={s.img} />
      </div>
      <div className="book-details">
        <a href="#" className={s.title}>
          {title}
        </a>
        <div className={s.author}>{author}</div>
        <div className={s.price}>${price}</div>
        <button className={cx("btn", "btn-info", s.cart)}>
          Добавить в корзину
        </button>
      </div>
    </li>
  );
};
