import React, { Component } from "react";
import axios from "axios";
import RandomFood from "../components/Functions/RandomFood";
import { Link } from "react-router-dom";
import Search from "./Search/search";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
// import Navbar from "./navbar";
// import Dinner from "./Dinner";
// import DietCategories from "./DietCategories";
// import Cousine from "./cousineCategories";
// import NavbarPhone from "./navbarPhone";

// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
const APP_ID = "ffd7e1b9";
const APP_KEY = "e439b5df8590bafcf11efad43ca3a69b";
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
        <div className="hometitle">
          <h2>Munchies</h2>
          <h3>All the recipes for whatever you're craving!</h3>
          <Search
            getFoods={this.getFoods}
            foods={this.state.foods}
            {...this.props}
          />
        </div>

        <RandomFood getCocktails={this.props.getCocktails} />

        <div className="ethnicHome">
          <img
            className="ethnicHomeImg"
            src={require("../images/ethnichome.jpg")}
            alt="ethnicimage"
          />
          <div className="travelWords">
            <h2>Travel Around The World</h2>
            <Link to="/ethnicfood">
              <h3>Link: Choose your cuisine</h3>
            </Link>
          </div>
        </div>

        <div className="healthDietHome">
          <img
            className="healthImg"
            src={require("../images/healthdiet.jpg")}
            alt="healthdietimage"
          />
          <div className="healthWords">
            <Link to="/healthdiet">
              <h2>Any Health & Diet Concerns?</h2>
            </Link>
          </div>
        </div>

        <div className="bldHome">
          <div className="bldWords">
            <h2>Breakfast, Lunch, or Dinner?</h2>
          </div>
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
        <footer>
          <h2>
            <Link to="/about">
              <i>About Us</i>
            </Link>
          </h2>
          <h3>
            <i>Copyright © MUNCHIES</i>
          </h3>
        </footer>
      </div>
    );
  }
}

export default Home;
