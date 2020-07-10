import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Breakfast from "./components/Breakfast";
import SingleFood from "./components/SingleFood";
import EthnicFood from "./components/EthnicFood";

class App extends Component {
  render() {
    return (
      <div>
        <Lunch />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/foods/:id"
            render={(props) => <SingleFood {...props} />}
          />
          <Route
            exact
            path="/ethnicfood/:ethnicity"
            render={(props) => <EthnicFood {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
