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
        <div className="slide-center">
          <Slider {...settings}>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Mexican">
                  Mexican
                  <img
                    className="circleimages"
                    src={require("../images/mexican.jpg")}
                    alt="mexicanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Japanese">
                  Japanese
                  <img
                    className="circleimages"
                    src={require("../images/japanese.jpg")}
                    alt="Japanesefood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Italian">
                  Italian
                  <img
                    className="circleimages"
                    src={require("../images/italian.jpg")}
                    alt="Italianfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/American">
                  American
                  <img
                    className="circleimages"
                    src={require("../images/american.jpg")}
                    alt="Americanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Indian">
                  Indian
                  <img
                    className="circleimages"
                    src={require("../images/indian.jpg")}
                    alt="Indianfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Chinese">
                  Chinese
                  <img
                    className="circleimages"
                    src={require("../images/chinese.jpg")}
                    alt="Chinesefood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/French">
                  French
                  <img
                    className="circleimages"
                    src={require("../images/french.jpg")}
                    alt="Frenchfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/South-American">
                  South-American
                  <img
                    className="circleimages"
                    src={require("../images/southamerican.jpg")}
                    alt="South-Americanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Caribbean">
                  Caribbean
                  <img
                    className="circleimages"
                    src={require("../images/caribbean.jpg")}
                    alt="Caribbeanfood"
                  />
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="child">
                <Link to="/ethnicFood/Mediterranean">
                  Mediterranean
                  <img
                    className="circleimages"
                    src={require("../images/mediterranean.jpg")}
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

export default CousineCategories;
