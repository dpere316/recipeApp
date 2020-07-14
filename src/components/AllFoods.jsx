import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllFoods = (props) => {
  console.log(props, "??");
  if (!props.foods.length) {
    // props.history.push("/");
  }
  return (
    <div className="column-search">
      <div className="row-search">
        {props.foods.map((item) => (
          <Link to={`/foods/${item.recipe.label}`}>
            <h4>{item.recipe.label}</h4>
            <img src={item.recipe.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AllFoods;
