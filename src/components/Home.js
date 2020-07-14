import React, { Component } from "react";
import axios from "axios";
import RandomFood from "./Functions/RandomFood";
import Navbar from "./Search/navbar";
import Breakfast from "./Sliders/Breakfast"
const APP_KEY3 = "2f1ace66bdd745f0a8b145740201407"




const APP_ID = "1949bcdc";
const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";

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
        <Navbar {...this.props} />
        <RandomFood/>
      </div>
    );
  }
}

export default Home;
