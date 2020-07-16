import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cousine from "../Sliders/CousineCategories";

// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";

// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";

class EthnicFilter extends Component {
  state = {
    ethnicFoods: [],
  };

  async componentDidMount() {
    console.log("in mount", this.props.match.params.id);
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.props.match.params.id}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
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
                <div className="name-column">
                  <h5>{eachRec.recipe.label}</h5>
                </div>

                <img src={eachRec.recipe.image} alt="ethnicfood" />
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
        <div className="row-search">{this.displayRecipes()}</div>
      </div>
    );
  }
}

export default EthnicFilter;
