import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DietCategories from "../Sliders/DietCategories";

const APP_ID = "1949bcdc";
const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
// const APP_ID = "027c69d3";
// const APP_KEY = "06c10b8536afafcb35d471d1e71b262e";
class HealthFilter extends Component {
  state = {
    healthDietFoods: [],
  };

  async componentDidMount() {
    console.log(this);
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=Diet=${this.props.match.params.id}&to=24&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    let res2 = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=Health=${this.props.match.params.id}&to=24&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(res);
    this.setState({
      healthDietFoods: res.data.hits,
      healthDietFoods: res2.data.hits,
    });
  }

  displayFoods = () => {
    return this.state.healthDietFoods.map((eachRec) => {
      return (
        <div>
          <div>
            <Link to={`/foods/${eachRec.recipe.label}`}>
              <li>
                <div className="name-column">
                  <h5>{eachRec.recipe.label}</h5>
                </div>

                <img src={eachRec.recipe.image} alt="healthdiet" />
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
        <DietCategories />
        <div className="row-search">{this.displayFoods()}</div>
      </div>
    );
  }
}

export default HealthFilter;
