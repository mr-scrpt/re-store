import React from "react";
import s from "./header.module.css";
import cx from "classnames";
import { Link } from "react-router-dom";
const Header = ({ numItems, total }) => {
  return (
    <header className={cx(s.main, "row")}>
      <Link to="/" className={cx(s.logo, "text-dark")}>
        ReStore
      </Link>
      <Link to="/cart" className={cx(s.cart)}>
        <i className={cx(s.icon, "fa", "fa-shopping-cart")} />
        {numItems} items (${total})
      </Link>
    </header>
  );
};
export default Header;
