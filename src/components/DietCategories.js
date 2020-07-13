import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import lowfat from "../images/lowfat.jpg";
import lowcarb from "../images/lowcarb.jpg";
import highprotein from "../images/highprotein.jpg";
import balanced from "../images/balanced.jpg";
import vegan from "../images/vegan.jpg";
import vegetarian from "../images/vegetarian.jpg";
import lowsugar from "../images/lowsugar.jpg";
import peanutfree from "../images/peanutfree.png";
import treenutfree from "../images/treenutfree.jpg";
import alcoholfree from "../images/alcoholfree.png";

const settings = {
    dots: true,
    infinte: true,
    speed: 10,
    arrows: true,
    slidesToScroll: 10,
    slidesToShow: 5,
    className: "slides",
  };

class DietCategories extends Component {


    render() {
        return (
            <div>
        <h1>Health & Diet Preferences</h1>
        
        <div className="categories">
          <div className="makeicon">
            <Link to="/healthdiet/Low-fat">
              Low-Fat
              <img className="circleimages" src={lowfat} alt="lowfat" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Low-carb">
              Low-Carb
              <img className="circleimages" src={lowcarb} alt="lowcarb" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/High-protein">
              High-Protein
              <img
                className="circleimages"
                src={highprotein}
                alt="highprotein"
              />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Balanced">
              Balanced
              <img className="circleimages" src={balanced} alt="balanced" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Vegan">
              Vegan
              <img className="circleimages" src={vegan} alt="vegan" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Vegetarian">
              Vegetarian
              <img className="circleimages" src={vegetarian} alt="vegetarian" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Low-sugar">
              Low Sugar
              <img className="circleimages" src={lowsugar} alt="lowsugar" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Peanut-free">
              Peanut Free
              <img className="circleimages" src={peanutfree} alt="peanutfree" />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Tree-nut-free">
              Tree Nut Free
              <img
                className="circleimages"
                src={treenutfree}
                alt="treenutfree"
              />
            </Link>
          </div>
          <div className="makeicon">
            <Link to="/healthdiet/Alcohol-free">
              Alcohol Free
              <img
                className="circleimages"
                src={alcoholfree}
                alt="alcoholfree"
              />
            </Link>
          </div>
        </div>
        
            </div>
        );
    }
}

export default DietCategories;