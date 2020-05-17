import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import store from "./redux/store"

store.subscribe(() => {
  console.log("Store changed:", store.getState());
});
store.dispatch({
  type: "addCounter",
  payload: {id: 1, value: 4}
});
store.dispatch({
  type: "addCounter",
  payload: {id: 2, value: 0}
});
store.dispatch({
  type: "addCounter",
  payload: {id: 3, value: 33}
});
store.dispatch({
  type: "addCounter",
  payload: {id: 4, value: 0}
});
store.dispatch({
  type: "handleIncrement",
  payload: {id: 1}
});
store.dispatch({
  type: "handleReset",
  payload: {id: 3}
});
store.dispatch({
  type: "handleDelete",
  payload: {id: 2}
});
console.log("state ==> ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
