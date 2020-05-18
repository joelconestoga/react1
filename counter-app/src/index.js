import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import store from "./redux/store"
import { Provider } from "react-redux";
import { addCounter } from './redux/actions'

store.subscribe(() => {
  console.log("Store changed:", store.getState());
});

store.dispatch(addCounter({id: 1, value: 4}));
store.dispatch(addCounter({id: 2, value: 0}));
store.dispatch(addCounter({id: 3, value: 34}));
store.dispatch(addCounter({id: 4, value: 0}));

console.log("state ==> ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
