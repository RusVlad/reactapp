import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import "babel-polyfill";

import React from "react";
import "./assets/scss/main.scss";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Layout from "./layout/layout";

const store = configureStore();

const Main = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

render(<Main />, document.getElementById("app"));
