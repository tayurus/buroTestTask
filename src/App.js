import React, { Component } from "react";

import "./App.scss";
import "antd/dist/antd.css";

import { Button } from "antd";

import { Router, Route } from "react-router-dom";

import { history } from "./helpers";

import { Header } from "./components";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={() => <div>Hello!</div>} />
          </div>
        </Router>

        <Header />
      </div>
    );
  }
}
