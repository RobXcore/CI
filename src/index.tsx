import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configStore } from "./store/configStore";
import App from "./App";

const rootElement = document.getElementById("root");

const { store } = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
