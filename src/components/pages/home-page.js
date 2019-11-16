import React from "react";
import BookList from "../book-list";
import ShopCartTable from "../shop-cart-table";
export const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShopCartTable />
    </div>
  );
};
