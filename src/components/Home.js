import React, { Component } from "react";
import axios from "axios";
import RandomFood from "./RandomFood";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import RandomCocktail from "./RandomCocktail";
import Navbar from "./navbar";
import Dinner from "./Dinner";
import { Link } from "react-router-dom";
import "./App.scss";

const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

class Home extends Component {
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&to=10&app_id=${APP_ID}&app_key=${APP_KEY}`
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
        <RandomFood />
        <RandomCocktail />
        <div className="ethnicFoods">
          <Link to="/ethnicFood/Mexican">Mexican</Link>
          <Link to="/ethnicFood/Japanese">Japanese</Link>
          <Link to="/ethnicFood/Italian">Italian</Link>
          <Link to="/ethnicFood/American">American</Link>
          <Link to="/ethnicFood/Indian">Indian</Link>
          <Link to="/ethnicFood/Chinese">Chinese</Link>
          <Link to="/ethnicFood/French">French</Link>
          <Link to="/ethnicFood/South-American">American</Link>
          <Link to="/ethnicFood/Caribbean">Caribbean</Link>
          <Link to="/ethnicFood/Mediterranean">Mediterranean</Link>
        </div>
        <div>
          <Link to="/healthdiet/low-fat">Low-Fat</Link>
          <Link to="/healthdiet/low-carb">Low-Carb</Link>
          <Link to="/healthdiet/high-protein">High-Protein</Link>
          <Link to="/healthdiet/balanced">Balanced</Link>
          <Link to="/healthdiet/vegan">Vegan</Link>
          <Link to="/healthdiet/vegetarian">Vegetarian</Link>
          <Link to="/healthdiet/sugar-conscious">Low Sugar</Link>
          <Link to="/healthdiet/peanut-free">No Peanuts</Link>
          <Link to="/healthdiet/tree-nut-free">No Tree Nuts</Link>
          <Link to="/healthdiet/alcohol-free">No Alcohol</Link>
        </div>
        <Breakfast />
        <Lunch />
        <Dinner />
      </div>
    );
  }
}

export default Home;
