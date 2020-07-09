import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/navbar";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Breakfast from "./components/Breakfast";

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
        </Switch>
      </div>
    );
  }
=======
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
>>>>>>> valerie
}

export default App;
