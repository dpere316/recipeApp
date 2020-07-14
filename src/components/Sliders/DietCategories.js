import React, { Component } from 'react';
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
};


class DietCategories extends Component {


    render() {
        return (
          <div className="randomFood">
          <div>
            <h1>Health & Diet Restrictions?</h1>
          </div>
          <div>
            <Slider {...settings}>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Low-fat">Low-Fat</Link>
                  <img
                    className="circleimages"
                    src={require("../images/lowfat.jpg")}
                    alt="mexicanfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Low-carb">Low-Carb</Link>
                  <img
                    className="circleimages"
                    src={require("../images/lowcarb.jpg")}
                    alt="Japanesefood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/High-protein">High-protein</Link>
                  <img
                    className="circleimages"
                    src={require("../images/highprotein.jpg")}
                    alt="Italianfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Balanced">Balanced</Link>
                  <img
                    className="circleimages"
                    src={require("../images/balanced.jpg")}
                    alt="Americanfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Vegan">Vegan</Link>
                  <img
                    className="circleimages"
                    src={require("../images/vegan.jpg")}
                    alt="Indianfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Vegetarian">Vegetarian</Link>
                  <img
                    className="circleimages"
                    src={require("../images/vegetarian.jpg")}
                    alt="Chinesefood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Low-sugar">Low-sugar</Link>
                  <img
                    className="circleimages"
                    src={require("../images/lowsugar.jpg")}
                    alt="Frenchfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Peanut-free">Peanut-free</Link>
                  <img
                    className="circleimages"
                    src={require("../images/peanutfree.png")}
                    alt="South-Americanfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Alcohol-free">Alcohol-free</Link>
                  <img
                    className="circleimages"
                    src={require("../images/alcoholfree.png")}
                    alt="Caribbeanfood"
                  />
                </div>
              </div>
              <div className="container">
                <div className="child">
                  <Link to="/healthdiet/Tree-nut-free">Tree-nut-free</Link>
                  <img
                    className="circleimages"
                    src={require("../images/treenutfree.jpg")}
                    alt="Mediterraneanfood"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        );
    }
}

export default DietCategories;


 
 
  
  
  
