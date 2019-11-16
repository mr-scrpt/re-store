import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.module.css";
import { withBookstoreService } from "../hoc";
import { HomePage, CartPage } from "../pages";
import Header from "../header";
const App = ({ bookstoreService }) => {
  return (
    <main role="main" className="container">
      <Header numItems={5} total={210} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route render={() => <h1>Страница не найдена!</h1>} />
      </Switch>
    </main>
  );
};

export default withBookstoreService()(App);
