import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());

  return <div>111111111111111</div>;
};

export default withBookstoreService()(App);
