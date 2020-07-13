import React, { Component } from "react";
import axios from "axios";
import RandomFood from "./RandomFood";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import RandomCocktail from "./RandomCocktail";
import Navbar from "./navbar";
import Dinner from "./Dinner";
import { Link } from "react-router-dom";
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

// const APP_ID = "b479ca7f";
// const APP_KEY = "1091d11a059bf224db39af98bca9540f	";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";

class Home extends Component {
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&to=10&app_id=${APP_ID2}&app_key=${APP_KEY2}`
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
        <h1 className="headers">Random Pick of the Day</h1>
        <div className="topcontainer">
          <RandomFood />
          <span className="plus">+</span>
          <RandomCocktail />
        </div>
        <h1 className="headers">What Are You Feeling?</h1>

        <div className="ethnicFoods">
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
        <h1 className="headers">Health & Diet Preferences</h1>

        <div className="healthDiet">
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
        <Breakfast />
        <Lunch />
        <Dinner />
      </div>
    );
  }
}

export default Home;
