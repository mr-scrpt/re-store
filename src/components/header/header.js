import React from "react";
import s from "./header.module.css";
import cx from "classnames";
const Header = ({ numItems, total }) => {
  return (
    <header className={cx(s.main, "row")}>
      <a href="#" className={cx(s.logo, "text-dark")}>
        ReStore
      </a>
      <a href="#" className={cx(s.cart)}>
        <i className={cx(s.icon, "fa", "fa-shopping-cart")} />
        {numItems} items (${total})
      </a>
    </header>
  );
};
export default Header;
