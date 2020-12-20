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

import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GA_ID as string);
ReactGA.pageview(window.location.pathname + window.location.search);

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
