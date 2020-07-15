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
        <div className="ethnicHome">
          <img
            className="ethnicHomeImg"
            src={require("../images/ethnichome.jpg")}
            alt="ethnicimage"
          />
          <div className="travelWords">
            <h2>Travel Around The World</h2>
            <h3>Link: Choose your cuisine</h3>
          </div>
        </div>
        <div className="healthDietHome">
          <img
            className="healthImg"
            src={require("../images/healthdiet.jpg")}
            alt="healthdietimage"
          />
          <div className="healthWords">
            <h2>Any Health & Diet Concerns?</h2>
          </div>
        </div>
        <div className="bldWords">
          <h2>Breakfast, Lunch, or Dinner?</h2>
        </div>
        <div className="bldHome">
          <img
            className="bldImg2"
            src={require("../images/dinner.jpg")}
            alt="bldimage2"
          />
          <img
            className="bldImg"
            src={require("../images/breakfast.jpg")}
            alt="bldimage"
          />
        </div>

        <footer>This is the footer</footer>
      </div>
    );
  }
}

export default Home;
