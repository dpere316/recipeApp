import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinte: true,
  speed: 10,
  arrows: true,
  slidesToScroll: 2,
  slidesToShow: 5,
  className: "slides",
  responsive:[
    {
    breakpoint: 420,
    settings:
    {
      slidesToShow:2,
      slidesToScroll:1
    }
  }]
};

class DietCategories extends Component {
  render() {
    console.log(this);
    return (
      <div className="randomFood">
        <div>
          <h1>Health & Diet Restrictions?</h1>
        </div>
        <div className="slide-center">
          <Slider {...settings}>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Low-fat">
                  Low-Fat
                  <img
                    className="circleimages"
                    src={require("../images/lowfat.jpg")}
                    alt="mexicanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Low-carb">
                  Low-Carb
                  <img
                    className="circleimages"
                    src={require("../images/lowcarb.jpg")}
                    alt="Japanesefood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/High-protein">
                  High-protein
                  <img
                    className="circleimages"
                    src={require("../images/highprotein.jpg")}
                    alt="Italianfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Balanced">
                  Balanced
                  <img
                    className="circleimages"
                    src={require("../images/balanced.jpg")}
                    alt="Americanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Vegan">
                  Vegan
                  <img
                    className="circleimages"
                    src={require("../images/vegan.jpg")}
                    alt="Indianfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Vegetarian">
                  Vegetarian
                  <img
                    className="circleimages"
                    src={require("../images/vegetarian.jpg")}
                    alt="Chinesefood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Low-sugar">
                  Low-sugar
                  <img
                    className="circleimages"
                    src={require("../images/lowsugar.jpg")}
                    alt="Frenchfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Peanut-free">
                  Peanut-free
                  <img
                    className="circleimages"
                    src={require("../images/peanutfree.png")}
                    alt="South-Americanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Alcohol-free">
                  Alcohol-free
                  <img
                    className="circleimages"
                    src={require("../images/alcoholfree.png")}
                    alt="Caribbeanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/healthdiet/Tree-nut-free">
                  Tree-nut-free
                  <img
                    className="circleimages"
                    src={require("../images/treenutfree.jpg")}
                    alt="Mediterraneanfood"
                  />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default DietCategories;
