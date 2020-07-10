import React, { Component } from "react";
import Navbar from "./navbar";
import SingleFood from "./SingleFood";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import EthnicFood from "./EthnicFood";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import RandomFood from "./RandomFood";
import RandomCocktail from "./RandomCocktail";

// const APP_ID = "1eddd451";
// const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class Home extends Component {
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID2}&app_key=${APP_KEY2}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    // console.log(res);
    this.setState({
      foods: res.data,
    });
    // console.log(this.state.foods);
    // localStorage.setItem("res", JSON.stringify(res.data));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Lunch />
        <RandomFood />
        <RandomCocktail />
      </div>
    );
  }
}

export default Home;
