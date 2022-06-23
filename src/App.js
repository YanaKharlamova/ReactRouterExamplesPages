import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

class App extends Component {
  render() {
    // const routerBaseName = "https://yanakharlamova.github.io/ReactRouterApp";
    // {process.env.PUBLIC_URL}-var1
    // {window.location.hostname}-var2
    // <Router basename={process.env.PUBLIC_URL}>
    return (
      <div className="container">
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <nav className="navigation-section">
          <li className="navigation-section-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation-section-link">
            <Link to="/about">About</Link>
          </li>
          <li className="navigation-section-link">
            <Link to="/contacts">Contacts</Link>
          </li>
        </nav>
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route />
          </Routes>
        </div>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
