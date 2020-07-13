import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cousine from "./cousineCategories";
// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";

// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";

class EthnicFood extends Component {
  state = {
    ethnicFoods: [],
  };

  async componentDidMount() {
    console.log(this);
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.props.match.params.ethnicity}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    console.log(res);
    this.setState({
      ethnicFoods: res.data.hits,
    });
  }

  displayRecipes = () => {
    return this.state.ethnicFoods.map((eachRec) => {
      return (
        <div>
          <div>
            <Link to={`/foods/${eachRec.recipe.label}`}>
              <li>
                <img src={eachRec.recipe.image} alt="ethnicfood" />
                {eachRec.recipe.label}
              </li>
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Cousine />
        {this.displayRecipes()}
      </div>
    );
  }
}

export default EthnicFood;
