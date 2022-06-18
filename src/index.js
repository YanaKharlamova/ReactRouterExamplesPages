import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
// const routerBaseName = process.env.PUBLIC_URL;

// ReactDOM.render(

//     <App />

//   document.getElementById("root")
// ); // ReactDOM.render(<App />, document.getElementById("root"));
//  "http://YanaKharlamova.github.io/ReactRouterApp",
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
