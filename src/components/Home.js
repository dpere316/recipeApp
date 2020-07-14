import React, { Component } from "react";
import axios from "axios";
import RandomFood from "../components/Functions/RandomFood";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
// import Navbar from "./navbar";
// import Dinner from "./Dinner";
// import DietCategories from "./DietCategories";
// import Cousine from "./cousineCategories";
// import NavbarPhone from "./navbarPhone";

// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
const APP_ID = "027c69d3";
const APP_KEY = "06c10b8536afafcb35d471d1e71b262e";
const settings = {
  dots: true,
  infinte: true,
  speed: 10,
  arrows: true,
  slidesToScroll: 10,
  slidesToShow: 5,
  className: "slides",
};

class Home extends Component {
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&to=10&app_id=${APP_ID}&app_key=${APP_KEY}`
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
        {/* <Navbar {...this.props} /> */}
        <RandomFood getCocktails={this.props.getCocktails} />
      </div>
    );
  }
}

export default Home;
