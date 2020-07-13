import React, { Component } from "react";
import axios from "axios";
import RandomFood from "./RandomFood";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Navbar from "./navbar";
import Dinner from "./Dinner";
import DietCategories from "./DietCategories";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mexican from "../images/mexican.jpg";
import japanese from "../images/japanese.jpg";
import italian from "../images/italian.jpg";
import american from "../images/american.jpg";
import indian from "../images/indian.jpg";
import chinese from "../images/chinese.jpg";
import french from "../images/french.jpg";
import southamerican from "../images/southamerican.jpg";
import caribbean from "../images/caribbean.jpg";
import mediterranean from "../images/mediterranean.jpg";


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
      <div>
      <Navbar {...this.props} />
      <RandomFood/>
      </div>
        <h1>What are you feeling</h1>
        <div className="categories">
          <div className="makeicon">
            <Link to="/ethnicFood/Mexican">
              Mexican
              <img className="circleimages" src={mexican} alt="mexicanfood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/Japanese">
              Japanese
              <img className="circleimages" src={japanese} alt="japanesefood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/Italian">
              Italian
              <img className="circleimages" src={italian} alt="italianfood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/American">
              American
              <img className="circleimages" src={american} alt="americanfood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/Indian">
              Indian
              <img className="circleimages" src={indian} alt="indianfood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/Chinese">
              Chinese
              <img className="circleimages" src={chinese} alt="chinesefood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/French">
              French
              <img className="circleimages" src={french} alt="frenchfood" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/South-American">
              South American
              <img
                className="circleimages"
                src={southamerican}
                alt="southamericanfood"
              />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/Caribbean">
              Caribbean
              <img
                className="circleimages"
                src={caribbean}
                alt="caribbeanfood"
              />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/ethnicFood/Mediterranean">
              Mediterranean
              <img
                className="circleimages"
                src={mediterranean}
                alt="mediterraneanfood"
              />
            </Link>
          </div>
        </div>
        <DietCategories/>
        <Breakfast/>
        <Lunch/>
        <Dinner/>
      </div>
    );
  }
}

export default Home;
