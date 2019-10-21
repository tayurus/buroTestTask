import React, { Component } from "react";

import "./App.scss";

import { Main, PersonalAccount, FNSregistration } from "./pages";

import { Header, Footer, NavMenu } from "./components";

import { Router, Route, Switch } from "react-router-dom";

import { history } from "./helpers";
import { navMenuItems } from "src/constants";

import { withNaming } from "@bem-react/classname";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("app");

export class App extends Component {
  render() {
    return (
      <div className={b()}>
        <Header />

        <div className={b("wrapper")}>
          <NavMenu navMenuItems={navMenuItems} />
          <div className={b("content")}>
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/personalAccount" component={PersonalAccount} />
                <Route exact path="/FNSregistration" component={FNSregistration} />
              </Switch>
            </Router>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
