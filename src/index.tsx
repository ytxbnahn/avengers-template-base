import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import RouterMap from "../src/router/index"
import * as serviceWorker from "./serviceWorker";
import { DemoStore } from "./stores/index";
import "./index.css";

const storeWrapper = {
  demo: new DemoStore(),
};

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...storeWrapper}>
      <Router history={history}>
        <RouterMap/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
