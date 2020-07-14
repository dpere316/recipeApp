import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FoodDetails from "./components/Functions/FoodDetails";
import EthnicFood from "./components/Functions/EthnicFilter";
import Allfoods from "./components/Search/AllFoods";
import HealthDietFood from "./components/Functions/HealthFilter";
import CocktailDetails from "./components/Functions/CocktailDetails";
import "./App.scss";

class App extends Component {
  state = {
    foods: [],
    cocktails: []
  };
  getFoods = (foods) => {
    this.setState({
      foods,
    });
  };
  getCocktails = (cocktails) => {
    this.setState({
      cocktails
    })
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} getCocktails={this.getCocktails} getFoods={this.getFoods} />}
          />
          <Route
            exact
            path="/foods/:id"
            render={(props) => <FoodDetails {...props} />}
          />
          <Route
            exact
            path="/cocktails/:id"
            render={(props) => <CocktailDetails cocktails={this.state.cocktails} {...props} />}
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
