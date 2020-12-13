import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { config } from "./store";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";

import moment from 'moment'
import 'moment/locale/ru'

moment.locale('ru')

export const overmind = createOvermind(config, { devtools: false });

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
