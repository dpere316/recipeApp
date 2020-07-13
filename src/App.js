import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleFood from "./components/SingleFood";
import EthnicFood from "./components/EthnicFood";
import Allfoods from "./components/AllFoods";
import HealthDietFood from "./components/HealthDietFood";
import './App.scss';

class App extends Component {
  state = {
    foods: [],
  };
  getFoods = (foods) => {
    this.setState({
      foods,
    });
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} getFoods={this.getFoods} />}
          />
          <Route
            exact
            path="/foods/:id"
            render={(props) => <SingleFood {...props} />}
          />
          <Route
            exact
            path="/ethnicfood/:id"
            render={(props) => <EthnicFood {...props} />}
          />
          <Route
            exact
            path="/searchfood"
            render={(props) => <Allfoods {...props} foods={this.state.foods} />}
          />
          <Route
            path="/healthdiet/:id"
            render={(props) => <HealthDietFood {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
