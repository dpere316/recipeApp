import React, { Component } from "react";
import axios from "axios";
import RandomFood from "./RandomFood";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Navbar from "./navbar";
import Dinner from "./Dinner";

const APP_ID = "ffd7e1b9";
const APP_KEY = "e439b5df8590bafcf11efad43ca3a69b	";

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
        <div className="hometitle">
          <h2>Munchies</h2>
          <h3>All the recipes for whatever you're craving!</h3>
        </div>
        <RandomFood />
        <div className="homeEthnic">
          <h2>Travel Around The World</h2>
          <h3>Choose your cuisine</h3>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
