import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import "antd/dist/antd.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </>
  );
};

export default App;
