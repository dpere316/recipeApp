import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DietCategories from "../Sliders/DietCategories";

const APP_ID = "1949bcdc";
const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";

class HealthFilter extends Component {
  state = {
    healthDietFoods: [],
  };

  async componentDidMount() {
    console.log(this);
    let res = await axios.get(
      `https://api.edamam.com/search?q=Diet=${this.props.match.params.id}&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    let res2 = await axios.get(
      `https://api.edamam.com/search?q=Health=${this.props.match.params.id}&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
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
                <img src={eachRec.recipe.image} alt="healthdiet" />
                {eachRec.recipe.label}
              </li>
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>
    <DietCategories/>
    {this.displayFoods()}</div>;
  }
}

export default HealthFilter;
