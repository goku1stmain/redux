import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// creating a store using configure store
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import useReducer from "./features/user";
import themeReducer from "./features/theme";
const store = configureStore({
  // we pass reducer inside the configure store
  reducer: {
    user: useReducer,
    theme: themeReducer,
  }, // it is a function which takes in value about current states
  //takes in three main things previous value,action,and return new value of the state
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* provider is making sure that all components should get access to the store  */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
