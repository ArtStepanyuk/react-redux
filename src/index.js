import React from "react";
import { render } from "react-dom";
import Layout from "./containers/layout";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./styles/main.scss";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

render(<App />, document.getElementById("app"));
