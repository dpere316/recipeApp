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
};

class CousineCategories extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="randomFood">
        <div>
          <h1>What are you feeling today?</h1>
        </div>
        <div>
          <Slider {...settings}>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Mexican">Mexican</Link>
                <img
                  className="circleimages"
                  src={require("../images/mexican.jpg")}
                  alt="mexicanfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Japanese">Japanese</Link>
                <img
                  className="circleimages"
                  src={require("../images/japanese.jpg")}
                  alt="Japanesefood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Italian">Italian</Link>
                <img
                  className="circleimages"
                  src={require("../images/italian.jpg")}
                  alt="Italianfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/American">American</Link>
                <img
                  className="circleimages"
                  src={require("../images/american.jpg")}
                  alt="Americanfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Indian">Indian</Link>
                <img
                  className="circleimages"
                  src={require("../images/indian.jpg")}
                  alt="Indianfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Chinese">Chinese</Link>
                <img
                  className="circleimages"
                  src={require("../images/chinese.jpg")}
                  alt="Chinesefood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/French">French</Link>
                <img
                  className="circleimages"
                  src={require("../images/french.jpg")}
                  alt="Frenchfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/South-American">South-American</Link>
                <img
                  className="circleimages"
                  src={require("../images/southamerican.jpg")}
                  alt="South-Americanfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Caribbean">Caribbean</Link>
                <img
                  className="circleimages"
                  src={require("../images/caribbean.jpg")}
                  alt="Caribbeanfood"
                />
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Mediterranean">Mediterranean</Link>
                <img
                  className="circleimages"
                  src={require("../images/mediterranean.jpg")}
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

export default CousineCategories;
