import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { LocaleProvider } from "antd";
import ru_RU from "antd/es/locale-provider/ru_RU";
import moment from "moment";
import "moment/locale/ru";

import { store } from "./helpers";
import { App } from "./App";
moment.locale("ru");

ReactDOM.render(
  <LocaleProvider locale={ru_RU}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
