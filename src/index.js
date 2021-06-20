import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { DataContextProvider } from "./context/DataContext";

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById("root")
);
