import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

class navbar extends Component {
  state = {
    foods: [],
    search: "",
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    // console.log(res);
    this.setState({
      foods: res.data,
    });
    // localStorage.setItem("res", JSON.stringify(res.data));
  }
  searchForFoods = async (event) => {
    event.preventDefault();
    console.log("search for food");
    console.log(this.state.search);
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    this.setState({ foods: res.data.hits });
    console.log(this.state.foods);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  displayAllFoods = () => {
    if (this.state.foods.length) {
      return this.state.foods.map((eachFood) => {
        return (
          <div>
            <li>
              {eachFood.recipe.label}
              <br />
              <img src={eachFood.recipe.image} />
            </li>
          </div>
        );
      });
    }
  };

  render() {
    // console.log(JSON.parse(localStorage.getItem("res")));
    // let obj = JSON.parse(localStorage.getItem("res"));

    return (
      <div>
        <Link to="/">
          <h1>Munchies</h1>
        </Link>
        <form onSubmit={this.searchForFoods}>
          <input
            onChange={this.handleChange}
            name="search"
            placeholder="Search"
          ></input>
          <button type="submit">Search</button>
        </form>
        {this.displayAllFoods()}
      </div>
    );
  }
}

export default navbar;
