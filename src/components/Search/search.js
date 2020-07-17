import React, { Component } from "react";
import axios from "axios";
import history from "../../history";

// const APP_ID = "b479ca7f";
// const APP_KEY = "1091d11a059bf224db39af98bca9540f  ";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";
class search extends Component {
  state = {
    foods: [],
    search: "",
  };
  searchForFoods = async (event) => {
    event.preventDefault();
    console.log("search for food");
    console.log(this.state.search);
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.search}&to=24&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    this.setState({ foods: res.data.hits });
    console.log(this.state.foods);
    this.props.getFoods(res.data.hits);
    console.log(this.props);
    // this.props.history.push("/searchfood");
    console.log(history);
    history.push("../searchfood");
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.searchForFoods}>
          <input
            className="search-bar"
            onChange={this.handleChange}
            name="search"
            placeholder="Search"
          ></input>

          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default search;
