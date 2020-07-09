import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleFood from "./components/SingleFood";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/foods/:id"
            render={(props) => <SingleFood {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
