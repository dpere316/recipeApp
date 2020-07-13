import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
  dots: true,
  infinte: true,
  speed: 10,
  arrows: true,
  slidesToScroll: 10,
  slidesToShow: 5,
  className: "slides",
};

class cousineCategories extends Component {
    render() {
        return (
          <div className = "randomFood">
          <div>
          <h1>What are you feeling today?</h1>
          </div>
            <div>
              <Slider {...settings}>
                <div>
                  <div>
                  <img className="circleimages" src={require("../images/american.jpg")} alt="mexicanfood" />
                  </div>
                </div> 
              </Slider>
            </div>
          </div>
        );
    }
}

export default cousineCategories;

{/* <div>
        <h1>What are you feeling</h1>
        <Slider >
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
        </Slider>
        </div> */}