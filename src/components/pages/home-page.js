import React from "react";
import BookListContainer from "../../containers/book-list-container";
import ShopCartTable from "../shop-cart-table";
export const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShopCartTable />
    </div>
  );
};
