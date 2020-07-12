import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Breakfast from "./components/Breakfast";
import SingleFood from "./components/SingleFood";
import EthnicFood from "./components/EthnicFood";
import Allfoods from "./components/AllFoods";
import HealthDietFood from "./components/HealthDietFood";
<<<<<<< HEAD
import "./App.scss";
=======
import './App.scss';
>>>>>>> master

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
