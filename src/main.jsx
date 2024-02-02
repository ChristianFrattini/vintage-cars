import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/auth.context.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContext>
    </Provider>
  </React.StrictMode>,
);
