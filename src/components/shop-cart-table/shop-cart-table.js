import React from "react";
import s from "./shop-cart-table.module.css";
import cx from "classnames";
const ShopCartTable = () => {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Позиция</td>
            <td>Количество</td>
            <td>Цена</td>
            <td>
              <button className={cx(s.button, "btn", "btn-outline-danger")}>
                <i className="fa fa-trash" />
              </button>
              <button className={cx(s.button, "btn", "btn-outline-success")}>
                <i className="fa fa-plus-circle" />
              </button>
              <button className={cx(s.button, "btn", "btn-outline-warning")}>
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={cx(s.total)}>Всего: $210</div>
    </div>
  );
};
export default ShopCartTable;
