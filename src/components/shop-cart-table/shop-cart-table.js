import React from "react";
import s from "./shop-cart-table.module.css";
import cx from "classnames";
import { connect } from "react-redux";
const ShopCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className={cx(s.button, "btn", "btn-outline-success")}
          >
            <i className="fa fa-plus-circle" />
          </button>

          <button
            onClick={() => onDecrease(id)}
            className={cx(s.button, "btn", "btn-outline-warning")}
          >
            <i className="fa fa-minus-circle" />
          </button>

          <button
            onClick={() => onDelete(id)}
            className={cx(s.button, "btn", "btn-outline-danger")}
          >
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={cx(s.main)}>
      <h2>Ваш заказ!</h2>
      <table className={cx("table")}>
        <thead>
          <tr>
            <th>#</th>
            <th>Позиция</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className={cx(s.total)}>Всего: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => ({
  items: cartItems,
  total: orderTotal
});
const mapDispatchToProps = () => ({
  onIncrease: id => console.log(`inc ${id}`),
  onDecrease: id => console.log(`dec ${id}`),
  onDelete: id => console.log(`del ${id}`)
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);
