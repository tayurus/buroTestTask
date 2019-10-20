import React, { Component } from "react";

import "./App.scss";

import { Main } from "./pages";

import { Header, Footer } from "./components";

import { Router, Route } from "react-router-dom";

import { history } from "./helpers";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router history={history}>
          <div>
            <Route exact path="/" component={Main} />
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}
