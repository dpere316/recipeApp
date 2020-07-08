import React, { Component } from "react";
import axios from "axios";
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

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
        return <li>{eachFood.recipe.label}</li>;
      });
    }
  };

  render() {
    // console.log(JSON.parse(localStorage.getItem("res")));
    // let obj = JSON.parse(localStorage.getItem("res"));

    return (
      <div>
        {" "}
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
